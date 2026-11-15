import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔥 garante modo correto mesmo se .env vier errado
const isProd =
  process.env.NODE_ENV === "production" || !!process.env.RAILWAY_ENVIRONMENT;

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("MODE:", isProd ? "PRODUCTION" : "DEVELOPMENT");

// ================= SMTP =================
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.warn("SMTP não configurado. Email desativado.");
      return null;
    }

    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }

  return transporter;
}

// ================= SERVER =================
async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // ================= API =================
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    console.log("--- NOVO LEAD ---");
    console.log(name, email);

    const mailer = getTransporter();

    if (mailer) {
      try {
        await mailer.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: process.env.EMAIL_DESTINO,
          subject: `Contato: ${name}`,
          text: message,
        });

        console.log("Email enviado!");
      } catch (err) {
        console.error("Erro email:", err);
      }
    }

    res.json({ ok: true });
  });

  // ================= FRONTEND =================
  if (!isProd) {
    // 🔥 DEV MODE (Vite middleware correto)
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });

    app.use(vite.middlewares);

    console.log("Vite middleware ativo (DEV)");
  } else {
    // 🔥 PROD MODE (dist correto)
    const distPath = path.resolve(process.cwd(), "dist");

    console.log("Serving dist:", distPath);

    app.use(express.static(distPath));

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server rodando em http://localhost:${PORT}`);
  });
}

startServer();
