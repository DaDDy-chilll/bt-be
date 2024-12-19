interface ISupplier {
  id?: bigint;
  name: string;
  branch?: string | null;
  contact_name: string;
  contact_start_date: Date;
  email: string;
  phone_one: string;
  phone_two?: string | null;
  state_id: bigint;
  city_id: bigint;
  address: string;
  website?: string | null;
  social?: string | null;
  del_flg?: number|null;
  created_at?: Date;
  updated_at?: Date | null;
  t_supplier_memos?: {
    id: bigint;
    memo: string;
    created_at: Date;
    updated_at: Date | null;
    supplier_id: bigint;
    del_flg: number;
    created_by: bigint;
  }[];
  m_states?: {
    id: bigint;
    name: string;
  };
  m_cities?: {
    id: bigint;
    name: string;
    state_id: bigint;
  };
}

class State {
    public id?: number | undefined;
    public name?: string;
  
    constructor(state: any) {
      this.id = Number(state.id);
      this.name = state.name;
    }
  }

class City {
    public id?: number | undefined;
    public name?: string;
    public state_id?: number;
    public m_states?: State;
  
    constructor(city: any) {
      this.id = Number(city.id);
      this.name = city.name;
      this.state_id = Number(city.state_id);
      this.m_states = city.m_states ? new State(city.m_states) : undefined;
    }
  }
class Memo {
    public id?: number | undefined;
    public memo?: string;
    public created_at?: string;
    public supplier_id?: number;
    public created_by?: number;
    public del_flg?: number;
    public updated_at?: string;
    constructor(memo: any) {
      this.id = Number(memo.id);
      this.memo = memo.memo;
      this.supplier_id = Number(memo.supplier_id);
      this.created_by = Number(memo.created_by);
      this.del_flg = Number(memo.del_flg);
      this.updated_at = memo.updated_at
        ? new Date(memo.updated_at).toLocaleString("en-US", {
            timeZone: "Asia/Yangon",
          })
        : undefined;
      this.created_at = memo.created_at
        ? new Date(memo.created_at).toLocaleString("en-US", {
            timeZone: "Asia/Yangon",
          })
        : undefined;
    }
  }
  
  class Supplier {
    public id?: number | undefined;
    public name: string;
    public branch?: string | undefined|null;
    public contact_name?: string;
    public contact_start_date?: Date;
    public email?: string;
    public phone_one?: string;
    public phone_two?: string | undefined|null;
    public state_id?: number;
    public city_id?: number;
    public address?: string;
    public website?: string | undefined|null;
    public social?: string | undefined|null;
    public del_flg?: number|null;
    public created_at?: string;
    public updated_at?: string;
    public m_states?: State;
    public m_cities?: City;
    public t_supplier_memos?: Memo[];
    constructor(supplier: ISupplier) {
      this.id = Number(supplier.id);
      this.name = supplier.name;
      this.branch = supplier.branch;
      this.contact_name = supplier.contact_name;
      this.contact_start_date = supplier.contact_start_date;
      this.email = supplier.email;
      this.phone_one = supplier.phone_one;
      this.phone_two = supplier.phone_two;
      this.state_id = Number(supplier.state_id);
      this.city_id = Number(supplier.city_id);
      this.address = supplier.address;
      this.website = supplier.website;
      this.social = supplier.social;
      this.del_flg = supplier.del_flg;
      this.m_states = supplier.m_states ? new State(supplier.m_states) : undefined;
      this.m_cities = supplier.m_cities ? new City(supplier.m_cities) : undefined;
      this.created_at = supplier.created_at
        ? new Date(supplier.created_at).toLocaleString("en-US", {
            timeZone: "Asia/Yangon",
          })
        : undefined;
      this.updated_at = supplier.updated_at
        ? new Date(supplier.updated_at).toLocaleString("en-US", {
            timeZone: "Asia/Yangon",
          })
        : undefined;
      this.t_supplier_memos = supplier.t_supplier_memos ? supplier.t_supplier_memos.map((memo: any) => new Memo(memo)) : [];
    }
  
    getSupplier(): Supplier {
      this.id = Number(this.id);
      this.state_id = Number(this.state_id);
      this.city_id = Number(this.city_id);
      return this;
    }
  }
  
  export default Supplier;