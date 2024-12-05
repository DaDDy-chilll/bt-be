export class UnitInstance {
    id?: bigint;
    name: string;
    type: number;
    symbol: string;
    del_flg?: number;
    created_at?: Date;
    updated_at?: Date;
    constructor(name: string, type: number, symbol: string) {
      this.name = name
      this.type = type
      this.symbol = symbol
    }
}
