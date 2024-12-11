import { PrismaClient } from "@prisma/client";

export class TaxRepository {
  private prisma = new PrismaClient();

  async getTaxById(id: number) {
    return await this.prisma.m_taxs.findFirst({
      where: { id: id },
    });
  }
}
