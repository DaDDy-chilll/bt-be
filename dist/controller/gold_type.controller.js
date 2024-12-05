"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllGoldTypes = void 0;
const gold_type_service_1 = require("../services/gold_type.service");
const gold_type_service = new gold_type_service_1.GoldTypeService();
const getAllGoldTypes = async (req, res) => {
    try {
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const goldTypes = await gold_type_service.getAllGoldTypes(Number(page), Number(limit));
        const total_gold_types = await gold_type_service.getAllGoldTypeCount();
        const pagination = {
            page: Number(page),
            limit: Number(limit),
            total: total_gold_types,
            total_pages: Math.ceil(total_gold_types / Number(limit)),
        };
        return res.status(200).json({
            success: true,
            message: "Gold types fetched successfully",
            data: goldTypes,
            pagination: pagination,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching gold types",
            error: error,
        });
    }
};
exports.getAllGoldTypes = getAllGoldTypes;
