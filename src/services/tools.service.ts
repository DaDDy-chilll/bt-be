import { log } from "console";
import Tools from "../models/tools.class";
import { ToolsRepository } from "../repositories/tools.repository";

export class ToolsService {
  private toolsRepository = new ToolsRepository();

  async getAllTools() {
    const toolGroup = await this.toolsRepository.getToolsGroupRange();

    const tools: { method: number; items: Tools[] }[] = [];
    for (const group of toolGroup) {
      const tool = await this.toolsRepository.getToolsByIdRange(group);
      tools.push({ method: group.method, items: tool as unknown as Tools[] });
    }

    return tools;
  }

  async getAllToolsCount(): Promise<number> {
    return await this.toolsRepository.getAllCount();
  }

  async createTool(tool: Tools) {
    return await this.toolsRepository.createTool(tool);
  }

  async updateTool(tool: Tools, id: string) {
    return await this.toolsRepository.updateTool(tool, id);
  }

  async getToolByMethodId(id: number) {
    return await this.toolsRepository.getToolByMethodId(id);
  }
}
