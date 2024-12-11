// src/models/User.ts

export class Level {
  id: bigint | number;
  name: string;
  del_flg: number;
  created_at: Date;
  updated_at: Date;

  constructor(data: Level) {
    this.id = Number(data.id);
    this.name = data.name;
    this.del_flg = Number(data.del_flg);
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}

export default Level;
