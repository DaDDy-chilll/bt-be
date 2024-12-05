"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseInstance = void 0;
class ResponseInstance {
    constructor(success, message, status, data, error) {
        this.success = success;
        this.message = message;
        this.status = status;
        this.data = data;
        this.error = error;
    }
}
exports.ResponseInstance = ResponseInstance;
