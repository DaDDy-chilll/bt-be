import { ITodayGoldPrice } from "../instances/master_setting/create.instance";
import { MasterSettingRepository } from "../repositories/master_setting.repository";
import { GoldTypeInstance } from "../instances/master_setting/gold_type.instance";
import { GemTypeInstance } from "../instances/master_setting/gem_type.instance";
import { UnitInstance } from "../instances/master_setting/unit.instance";
import {
  ColorInstance,
  GemIconInstance,
} from "../instances/master_setting/color.instance";
export class MasterSettingService {
  private masterSettingRepository = new MasterSettingRepository();

  // Today Gold Price
  async createTodayGoldPrice(todayGoldPrice: ITodayGoldPrice) {
    return await this.masterSettingRepository.createTodayGoldPrice(
      todayGoldPrice
    );
  }

  async getAllTodayGoldPrice() {
    return await this.masterSettingRepository.getAllTodayGoldPrice();
  }

  async updateTodayGoldPrice(todayGoldPrice: ITodayGoldPrice, id: bigint) {
    return await this.masterSettingRepository.updateTodayGoldPrice(
      todayGoldPrice,
      id
    );
  }

  async deleteTodayGoldPrice(id: bigint) {
    return await this.masterSettingRepository.deleteTodayGoldPrice(id);
  }

  // Gold Type
  async createGoldType(goldType: GoldTypeInstance) {
    return await this.masterSettingRepository.createGoldType(goldType);
  }

  async getAllGoldType() {
    return await this.masterSettingRepository.getAllGoldType();
  }

  async updateGoldType(goldType: GoldTypeInstance, id: bigint) {
    return await this.masterSettingRepository.updateGoldType(goldType, id);
  }

  async deleteGoldType(id: bigint) {
    return await this.masterSettingRepository.deleteGoldType(id);
  }

  // Gem Type
  async createGemType(gemType: GemTypeInstance) {
    return await this.masterSettingRepository.createGemType(gemType);
  }

  async getAllGemType() {
    return await this.masterSettingRepository.getAllGemType();
  }

  async updateGemType(gemType: GemTypeInstance, id: bigint) {
    return await this.masterSettingRepository.updateGemType(gemType, id);
  }

  async deleteGemType(id: bigint) {
    return await this.masterSettingRepository.deleteGemType(id);
  }

  // Unit
  async createUnit(unit: UnitInstance) {
    return await this.masterSettingRepository.createUnit(unit);
  }

  async getAllUnit(type?: number) {
    return await this.masterSettingRepository.getAllUnit(type);
  }

  async updateUnit(unit: UnitInstance, id: bigint) {
    return await this.masterSettingRepository.updateUnit(unit, id);
  }

  async deleteUnit(id: bigint) {
    return await this.masterSettingRepository.deleteUnit(id);
  }

  //m_colors
  async getAllColor() {
    return await this.masterSettingRepository.getAllColor();
  }

  async createColor(color: ColorInstance) {
    return await this.masterSettingRepository.createColor(color);
  }

  //m_gem_icons
  async getAllGemIcon() {
    return await this.masterSettingRepository.getAllGemIcon();
  }

  async createGemIcon(gemIcon: GemIconInstance) {
    return await this.masterSettingRepository.createGemIcon(gemIcon);
  }

  //m_states
  async getAllState() {
    return await this.masterSettingRepository.getAllState();
  }

  //m_cities
  async getAllCity(state_id: number) {
    return await this.masterSettingRepository.getAllCity(state_id);
  }

  //m_levels
  async getAllLevel() {
    return await this.masterSettingRepository.getAllLevel();
  }

  //m_product_types
  async getAllProductType() {
    return await this.masterSettingRepository.getAllProductType();
  }

  //m_product_categories
  async getAllProductCategory() {
    return await this.masterSettingRepository.getAllProductCategory();
  }
}
