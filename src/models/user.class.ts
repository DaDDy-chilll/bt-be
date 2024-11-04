// src/models/User.ts

class User {
  private id?: number;
  private name: string;
  private password: string | undefined;
  private created_at: string;
  private updated_at: string;
  private del_flg: boolean;

  constructor(id: number | undefined, name: string, password: string) {
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
  //   static createUserInstance = (name: string, password: string): User => {
  //     return new User(name, password);
  //   };
}

export default User;
