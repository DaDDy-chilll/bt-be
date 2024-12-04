// src/models/User.ts

class User {
  private id?: number;
  private name: string;
  private password: string | undefined;
  private created_at: string;
  private updated_at: string;
  private del_flg: boolean;
  private otp_code?: string | undefined;
  constructor(
    id: number | undefined,
    name: string,
    password: string,
    otp_code?: string | undefined
  ) {
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
    this.otp_code = otp_code;
  }

  // Getters
  getId(): number | undefined {
    return this.id;
  }

  getName(): string | null {
    return this.name;
  }

  getPassword(): string | undefined {
    return this.password;
  }

  getCreatedAt(): string {
    return this.created_at;
  }

  getUpdatedAt(): string {
    return this.updated_at;
  }

  getDelFlg(): boolean {
    return this.del_flg;
  }

  getOtpCode(): string | undefined {
    return this.otp_code;
  }

  // Setters
  setName(name: string): void {
    this.name = name;
    this.updated_at = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Yangon",
    });
  }

  setPassword(password: string): void {
    this.password = password;
    this.updated_at = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Yangon",
    });
  }

  setDelFlg(del_flg: boolean): void {
    this.del_flg = del_flg;
    this.updated_at = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Yangon",
    });
  }
  deletePassword(): void {
    this.password = undefined;
  }

  setOtpCode(otp_code: string): void {
    this.otp_code = otp_code;
  }
  //   static createUserInstance = (name: string, password: string): User => {
  //     return new User(name, password);
  //   };
}

export default User;
