import { PrismaClient } from "@prisma/client";

export class MailSettingsRepository {
  private prisma = new PrismaClient();

  async getMailSettings() {
    const mailSettings = await this.prisma.m_mail_settings.findFirst();
    return mailSettings;
  }
}
