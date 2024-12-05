"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInstance = void 0;
class ProductInstance {
    constructor(code, name, category_id, type_id, length, length_unit_id, weight, weight_unit_id, gold_types_id, gold_color_id, size, size_unit_id, total_weight, total_weight_unit_id, gems_price, ayoutwat, latt_kha, m_product_gems, created_by) {
        this.code = code;
        this.category_id = category_id;
        this.type_id = type_id;
        this.name = name;
        this.length = length;
        this.length_unit_id = length_unit_id;
        this.weight = weight;
        this.weight_unit_id = weight_unit_id;
        this.gold_types_id = gold_types_id;
        this.gold_color_id = gold_color_id;
        this.size = size;
        this.size_unit_id = size_unit_id;
        this.total_weight = total_weight;
        this.total_weight_unit_id = total_weight_unit_id;
        this.gems_price = gems_price;
        this.ayoutwat = ayoutwat;
        this.latt_kha = latt_kha;
        this.m_product_gems = m_product_gems;
        this.created_by = created_by;
    }
}
exports.ProductInstance = ProductInstance;
