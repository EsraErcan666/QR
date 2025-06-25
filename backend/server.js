import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = 5001;

// CORS ayarı (gerekirse frontend portunu ekle)
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { ad, soyad, telefon, mail, mesaj } = req.body;
  console.log("POST /send-email endpoint called");

  // Gmail SMTP ayarları
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "esraercan888@gmail.com", // Gönderen Gmail adresi
      pass: "pycv hofr ykuo unau" // Gmail uygulama şifresi
    }
  });

  const mailOptions = {
    from: "esraercan888@gmail.com",
    to: "esraercan888@gmail.com",
    replyTo: mail,
    subject: "Yeni İletişim Formu Mesajı",
    html: `
      <h2>Yeni İletişim Formu Mesajınız;</h2>
      <p><b>Ad:</b> ${ad}</p>
      <p><b>Soyad:</b> ${soyad}</p>
      <p><b>Telefon:</b> ${telefon}</p>
      <p><b>Mail:</b> ${mail}</p>
      <p><b>Mesaj:</b> ${mesaj}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "E-posta başarıyla gönderildi!" });
  } catch (error) {
    console.error("E-posta gönderme hatası:", error);
    res.status(500).json({ message: "E-posta gönderilemedi.", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 