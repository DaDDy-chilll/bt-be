import { PrismaClient } from "@prisma/client";
import { ITodayGoldPrice } from "../instances/master_setting/create.instance";
import { GoldTypeInstance } from "../instances/master_setting/gold_type.instance";
import { GemTypeInstance } from "../instances/master_setting/gem_type.instance";
import { UnitInstance } from "../instances/master_setting/unit.instance";
import {
  ColorInstance,
  GemIconInstance,
} from "../instances/master_setting/color.instance";
import { GemIcon, GemType } from "../models/gem_type.class";
import GoldType from "../models/gold_type.class";
import TodayGoldPrice from "../models/today_gold_price.class";
import Color from "../models/color.class";
import ProductType from "../models/product_type.class";
import ProductCategory from "../models/product_category.class";

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
      where: {
        del_flg: 0,
      },
    });
    return masterSettings.map(
      (masterSetting: any) => new TodayGoldPrice(masterSetting)
    );
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
    const goldTypes = await this.prisma.m_gold_types.findMany({
      where: {
        del_flg: 0,
      },
    });
    return goldTypes.map((goldType: any) => new GoldType(goldType));


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
      where: {
        del_flg: 0,
      },
      include: {
        m_colors: true,
        m_gem_icons: true,
      },
    });
    return gemTypes.map((gemType: any) => new GemType(gemType));
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



  async getAllUnit(type?: number) {
    const where = type ? { type: type, del_flg: 0 } : { del_flg: 0 };
    const units = await this.prisma.m_units.findMany({
      where: where,
    });
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
    const colors = await this.prisma.m_colors.findMany(
      {
        where:{
          del_flg :0
        }
      }
    );
    return colors.map((color: any) => new Color(color));
  
  }

  async createColor(color: ColorInstance) {
    const colors = await this.prisma.m_colors.create({
      data: color,
    });
    return colors;
  }
  //m_gem_icons
  async getAllGemIcon() {
    const gemIcons = await this.prisma.m_gem_icons.findMany(
      {
        where:{
          del_flg:0
        }
      }
    );
    return gemIcons.map((gemIcon: any) => new GemIcon(gemIcon));
  }

  async createGemIcon(gemIcon: GemIconInstance) {
    const gemIcons = await this.prisma.m_gem_icons.create({
      data: gemIcon,
    });
    return gemIcons;
  }

  //m_product_types
  async getAllProductType() {
    const productTypes = await this.prisma.m_product_types.findMany();
    return productTypes.map((productType: any) => new ProductType(productType));
  }

  //m_product_categories
  async getAllProductCategory() {
    const productCategories = await this.prisma.m_product_categories.findMany();
    return productCategories.map(
      (productCategory: any) => new ProductCategory(productCategory)
    );
  }

  //m_states
  async getAllState() {
    const states = await this.prisma.m_states.findMany({
      where: {
        del_flg: 0
      },
    });
    const castedStates = states.map((state) => ({
      ...state,
      id: Number(state.id),
    }));
    return castedStates;
  }

  //m_cities
  async getAllCity(state_id: number) {
    const cities = await this.prisma.m_cities.findMany({
      where: {
        del_flg: 0,
        state_id: state_id,
      },
    });
    const castedCities = cities.map((city) => ({
      ...city,
      id: Number(city.id),
    }));
    return castedCities;
  }

  //m_levels
  async getAllLevel() {
    const levels = await this.prisma.m_levels.findMany({
      where: {
        del_flg: 0,
      },
    });
    const castedLevels = levels.map((level) => ({
      ...level,
      id: Number(level.id),
    }));
    return castedLevels;
  }
}
