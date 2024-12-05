"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
exports.response = {
    success: (res, status, message, data) => {
        const response = {
            success: true,
            message,
            status: status,
        };
        if (data)
            response.data = data;
        res.status(status).json(response);
    },
    //   validation: (
    //     res: any,
    //     status: number,
    //     msg: [] | string | object,
    //     data?: any
    //   ) => {
    //     const response: Response = {
    //       success: true,
    //       message: { validation: msg },
    //       status: status,
    //     };
    //     if (data) {
    //       const parsedData = JSON.parse(data);
    //       response.data = parsedData;
    //     }
    //     res.status(status).json(response);
    //   },
    fail: (res, status, error = "", message = "Error") => {
        const response = {
            success: false,
            message: message,
            status: status,
            error: error,
        };
        res.status(status).json(response);
    },
    internal: (res, status, message = "Internal Error", error) => {
        const response = {
            success: false,
            message,
            status: status,
            error,
        };
        res.status(status).json(response);
    },
};
