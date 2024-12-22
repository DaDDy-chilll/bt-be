export class WarehouseType {
  private id?: number;
  private type: string;
  private created_at: string;
  private updated_at: string;

  constructor(id: number | undefined, type: string) {
    this.id = id;
    this.type = type;
    this.created_at = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Yangon",
    });
    this.updated_at = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Yangon",
    });
  }
}
