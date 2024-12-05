"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductGemInstance = void 0;
class ProductGemInstance {
    constructor(id, name, product_id, color_id, pieces, weight, weight_unit_id, icon) {
        this.id = id;
        this.name = name;
        this.product_id = product_id;
        this.color_id = color_id;
        this.pieces = pieces;
        this.weight = weight;
        this.weight_unit_id = weight_unit_id;
        this.icon = icon;
    }
}
exports.ProductGemInstance = ProductGemInstance;
