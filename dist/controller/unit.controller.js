"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUnits = void 0;
const unit_service_1 = require("../services/unit.service");
const unit_service = new unit_service_1.UnitService();
const getAllUnits = async (req, res) => {
    try {
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const units = await unit_service.getAllUnits(Number(page), Number(limit));
        const total_units = await unit_service.getAllUnitCount();
        const pagination = {
            page: Number(page),
            limit: Number(limit),
            total: total_units,
            total_pages: Math.ceil(total_units / Number(limit)),
        };
        return res.status(200).json({
            success: true,
            message: "Units fetched successfully",
            data: units,
            pagination: pagination,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching units",
            error: error,
        });
    }
};
exports.getAllUnits = getAllUnits;
