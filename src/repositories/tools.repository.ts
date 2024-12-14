import { PrismaClient, m_product_types } from "@prisma/client";
import Tools from "../models/tools.class";

interface ToolGroup {
  method: number;
  _min: {
    id: number;
  };
  _max: {
    id: number;
  };
}
export class ToolsRepository {
  private prisma = new PrismaClient();

  async getToolsGroupRange(): Promise<ToolGroup[]> {
    const tools = await this.prisma.m_gold_calculate_method.groupBy({
      by: ["method"],
      _min: {
        id: true,
      },
      _max: {
        id: true,
      },
      orderBy: {
        method: "asc",
      },
    });
    return tools as unknown as ToolGroup[];
  }

  async getAllCount(): Promise<number> {
    return await this.prisma.m_gold_calculate_method.count();
  }

  async getToolsByIdRange(group: ToolGroup) {
    const tools = await this.prisma.m_gold_calculate_method.findMany({
      where: {
        id: {
          gte: BigInt(group._min.id), // Greater than or equal to min ID
          lte: BigInt(group._max.id), // Less than or equal to max ID
        },
        method: group.method,
      },
      orderBy: {
        id: "asc",
      },
    });

    return tools.map((tool) => new Tools(tool as unknown as Tools).getTool());
  }

  async createTool(tool: Tools) {
    return await this.prisma.m_gold_calculate_method.create({
      data: {
        method: tool.method,
        weight: tool.weight,
        category: tool.category,
        one_kyatt: tool.one_kyatt,
        five_muu: tool.five_muu,
        one_mat: tool.one_mat,
        one_mu: tool.one_mu,
        one_pae: tool.one_pae,
      },
    });
  }

  async updateTool(tool: Tools, id: string) {
    return await this.prisma.m_gold_calculate_method.update({
      where: { id: BigInt(id) },
      data: {
        // method: tool.method,
        weight: tool.weight,
        category: tool.category,
        one_kyatt: tool.one_kyatt,
        five_muu: tool.five_muu,
        one_mat: tool.one_mat,
        one_mu: tool.one_mu,
        one_pae: tool.one_pae,
      },
    });
  }

  async getToolByMethodId(id: number) {
    return await this.prisma.m_gold_calculate_method.findFirst({
      where: { method: id },
    });
  }
}
