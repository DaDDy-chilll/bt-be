import { PrismaClient } from "@prisma/client";
import { ITodayGoldPrice } from "../instances/master_setting/create.instance";
import { IProfileInstance } from "../instances/system_setting/profile.instance";``
export class MasterSettingRepository {
  private prisma = new PrismaClient();


  // Profile
  async getProfile(id: bigint) {
    return await this.prisma.m_users.findFirst({
      where: { id: id },
    });
  }
  async updateProfile(id: bigint, data: IProfileInstance) {
    return await this.prisma.m_users.update({
      where: { id: id },
      data: data,
    });
  }
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
}
