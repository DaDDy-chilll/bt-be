export class GoldTypeInstance {
  id?: bigint;
  name: string;
  del_flg?: number;
  created_at?: Date;
  updated_at?: Date;
  constructor(name: string) {
    this.name = name
  }
}
