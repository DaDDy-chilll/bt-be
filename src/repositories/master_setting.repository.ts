import { PrismaClient } from "@prisma/client";
import { ITodayGoldPrice } from "../instances/master_setting/create.instance";
import { GoldTypeInstance } from "../instances/master_setting/gold_type.instance";
import { GemTypeInstance } from "../instances/master_setting/gem_type.instance";
import { UnitInstance } from "../instances/master_setting/unit.instance";
import { ColorInstance, GemIconInstance } from "../instances/master_setting/color.instance";
export class MasterSettingRepository {
  private prisma = new PrismaClient();

  // Today Gold Price
  async createTodayGoldPrice(todayGoldPrice: ITodayGoldPrice) {
    const masterSettings = await this.prisma.m_today_gold_prices.create({
      data: todayGoldPrice,
    });

    return masterSettings;
  }

  async getAllTodayGoldPrice() {
    const masterSettings = await this.prisma.m_today_gold_prices.findMany({
      include: {
        m_gold_types: true,
        m_units: true,
      },
    });
    const castedMasterSettings = masterSettings.map((masterSetting) => ({
      ...masterSetting,
      id: Number(masterSetting.id),
      gold_types_id: Number(masterSetting.gold_types_id),
      unit_id: Number(masterSetting.unit_id),
      gold_type: masterSetting.m_gold_types
        ? {
            id: Number(masterSetting.m_gold_types.id),
            name: masterSetting.m_gold_types.name,
          }
        : null,
      unit: masterSetting.m_units
        ? {
            id: Number(masterSetting.m_units.id),
            name: masterSetting.m_units.name,
            symbol: masterSetting.m_units.symbol,
            type: masterSetting.m_units.type,
          }
        : null,
    }));
    return castedMasterSettings;
  }

  async updateTodayGoldPrice(todayGoldPrice: ITodayGoldPrice, id: bigint) {
    const masterSettings = await this.prisma.m_today_gold_prices.update({
      where: {
        id: id,
      },
      data: todayGoldPrice,
    });

    return masterSettings;
  }

  async deleteTodayGoldPrice(id: bigint) {
    const masterSettings = await this.prisma.m_today_gold_prices.update({
      where: { id: id },
      data: {
        del_flg: 1,
      },
    });

    return masterSettings;
  }

  // Gold Type
  async createGoldType(goldType: GoldTypeInstance) {
    const goldTypes = await this.prisma.m_gold_types.create({
      data: goldType,
    });

    return goldTypes;
  }

  async updateGoldType(goldType: GoldTypeInstance, id: bigint) {
    const goldTypes = await this.prisma.m_gold_types.update({
      where: { id: id },
      data: goldType,
    });
    return goldTypes;
  }

  async getAllGoldType() {
    const goldTypes = await this.prisma.m_gold_types.findMany();
    console.log(goldTypes);
    const castedGoldTypes = goldTypes.map((goldType) => ({
      ...goldType,
      id: Number(goldType.id),
    }));
    return castedGoldTypes;
  }

  async deleteGoldType(id: bigint) {
    const goldTypes = await this.prisma.m_gold_types.update({
      where: { id: id },
      data: { del_flg: 1 },
    });
    return goldTypes;
  }

  // Gem  Create
  async createGemType(gemType: GemTypeInstance) {
    const gemTypes = await this.prisma.m_gem_types.create({
      data: gemType,
    });

    return gemTypes;
  }

  async updateGemType(gemType: GemTypeInstance, id: bigint) {
    const gemTypes = await this.prisma.m_gem_types.update({
      where: { id: id },
      data: gemType,
    });
    return gemTypes;
  }

  async getAllGemType() {
    const gemTypes = await this.prisma.m_gem_types.findMany({
      include: {
        m_colors: true,
        m_gem_icons: true,
      },
    });
    const castedGemTypes = gemTypes.map((gemType) => ({
      ...gemType,
      id: Number(gemType.id),
      color_id: Number(gemType.color_id),
      icon_id: Number(gemType.icon_id),
      color: gemType.m_colors
        ? {
            id: Number(gemType.m_colors.id),
            name: gemType.m_colors.name,
          }
        : null,
      icon: gemType.m_gem_icons
        ? {
            id: Number(gemType.m_gem_icons.id),
            path: gemType.m_gem_icons.icon_path,
          }
        : null,
    }));
    return castedGemTypes;
  }

  async deleteGemType(id: bigint) {
    const gemTypes = await this.prisma.m_gem_types.update({
      where: { id: id },
      data: { del_flg: 1 },
    });
    return gemTypes;
  }

  // Unit
  async createUnit(unit: UnitInstance) {
    const units = await this.prisma.m_units.create({
      data: unit,
    });

    return units;
  }

  async updateUnit(unit: UnitInstance, id: bigint) {
    const units = await this.prisma.m_units.update({
      where: { id: id },
      data: unit,
    });
    return units;
  }

  async getAllUnit() {
    const units = await this.prisma.m_units.findMany();
    const castedUnits = units.map((unit) => ({
      ...unit,
      id: Number(unit.id),
    }));
    return castedUnits;
  }

  async deleteUnit(id: bigint) {
    const units = await this.prisma.m_units.update({
      where: { id: id },
      data: { del_flg: 1 },
    });
    return units;
  }

  //m_colors
  async getAllColor() {
    const colors = await this.prisma.m_colors.findMany();
    const castedColors = colors.map((color) => ({
      ...color,
      id: Number(color.id),
    }));
    return castedColors;
  }

  async createColor(color: ColorInstance) {
    const colors = await this.prisma.m_colors.create({
      data: color,
    });
    return colors;
  }
  //m_gem_icons
  async getAllGemIcon() {
    const gemIcons = await this.prisma.m_gem_icons.findMany();
    const castedGemIcons = gemIcons.map((gemIcon) => ({
      ...gemIcon,
      id: Number(gemIcon.id),
    }));
    return castedGemIcons;
  }

  async createGemIcon(gemIcon: GemIconInstance) {
    const gemIcons = await this.prisma.m_gem_icons.create({
      data: gemIcon,
    });
    return gemIcons;
  }
}


