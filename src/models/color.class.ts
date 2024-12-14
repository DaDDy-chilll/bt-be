// src/models/User.ts
export default class Color {
  public id?: number | undefined;
  public name?: string;
  public del_flg?: string;

  constructor(color: Color) {
    this.id = Number(color.id);
    this.name = color.name;
    this.del_flg = color.del_flg;
  }
}
