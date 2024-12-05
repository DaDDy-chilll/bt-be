export class GemTypeInstance {
    id?: bigint;
    name: string;
    color_id: bigint;
    icon_id: bigint;
    del_flg?: number;
    created_at?: Date;
    updated_at?: Date;
    constructor(name: string, color_id: bigint, icon_id: bigint) {
      this.name = name
      this.color_id = color_id
      this.icon_id = icon_id
    }
}
