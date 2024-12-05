"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllColors = void 0;
const color_service_1 = require("../services/color.service");
const color_service = new color_service_1.ColorService();
const getAllColors = async (req, res) => {
    try {
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const colors = await color_service.getAllColors(Number(page), Number(limit));
        const total_colors = await color_service.getAllColorCount();
        const pagination = {
            page: Number(page),
            limit: Number(limit),
            total: total_colors,
            total_pages: Math.ceil(total_colors / Number(limit)),
        };
        return res.status(200).json({
            success: true,
            message: "Colors fetched successfully",
            data: colors,
            pagination: pagination,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching colors",
            error: error,
        });
    }
};
exports.getAllColors = getAllColors;
