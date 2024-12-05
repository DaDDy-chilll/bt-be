"use strict";
// src/models/User.ts
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.created_at = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Yangon",
        });
        this.updated_at = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Yangon",
        });
        this.del_flg = false;
    }
    // Getters
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPassword() {
        return this.password;
    }
    getCreatedAt() {
        return this.created_at;
    }
    getUpdatedAt() {
        return this.updated_at;
    }
    getDelFlg() {
        return this.del_flg;
    }
    // Setters
    setName(name) {
        this.name = name;
        this.updated_at = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Yangon",
        });
    }
    setPassword(password) {
        this.password = password;
        this.updated_at = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Yangon",
        });
    }
    setDelFlg(del_flg) {
        this.del_flg = del_flg;
        this.updated_at = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Yangon",
        });
    }
    deletePassword() {
        this.password = undefined;
    }
}
exports.default = User;
