// src/models/User.ts

import Level from "./level.class";

export class Customer {
  id: bigint | number;
  first_name: string;
  last_name: string;
  phone: string;
  nrc: string;
  email: string;
  social: string;
  level_id: bigint | number;
  del_flg: number;
  created_at: Date;
  updated_at: Date;

  m_level?: Level;
  constructor(data: Customer) {
    this.id = Number(data.id);
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.phone = data.phone;
    this.nrc = data.nrc;
    this.email = data.email;
    this.social = data.social;
    this.level_id = Number(data.level_id);
    this.del_flg = Number(data.del_flg);
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;

    this.m_level = data.m_level ? new Level(data.m_level) : undefined;
  }
}

export default Customer;
