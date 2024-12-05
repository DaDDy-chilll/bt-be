"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductGem {
    constructor(name, product_id, pieces, color_id, weight, weight_unit_id, icon, created_by, updated_at) {
        this.name = name;
        this.product_id = product_id;
        this.pieces = pieces;
        this.color_id = color_id;
        this.weight = weight;
        this.weight_unit_id = weight_unit_id;
        this.icon = icon;
        this.created_by = created_by;
        this.created_at = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Yangon",
        });
        this.updated_at = updated_at;
        this.del_flg = false;
    }
}
exports.default = ProductGem;
