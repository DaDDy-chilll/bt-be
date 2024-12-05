import nodemailer from "nodemailer";
import { SMTPTransportOptions } from "../instances/mail.instance";
import { MailSettingsRepository } from "../repositories/mail.repository";

export class MailService {
  private mailSettingsRepository = new MailSettingsRepository();
  async sendEmail(emailBody: string, to: string, subject: string) {
    const mailSettings = await this.mailSettingsRepository.getMailSettings();

    const transporter = nodemailer.createTransport({
      host: mailSettings?.host,
      port: mailSettings?.port,
      secure: true,
      auth: {
        user: mailSettings?.username,
        pass: mailSettings?.password,
      },
    });

    await transporter.sendMail({
      from: `"${mailSettings?.fromName}" <${mailSettings?.fromAddress}>`,
      to: to,
      subject: subject,
      html: emailBody,
    });
  }

  async sendForgotPasswordEmail(email: string, hashedOtp: string) {
    await this.sendEmail(
      `<h1>Your OTP code is ${hashedOtp}</h1>`,
      email,
      "Forgot Password"
    );
  }
}
