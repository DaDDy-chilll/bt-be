export type ISupplier = {
  name: string;
  branch?: string;
  contact_name: string;
  contact_start_date: Date;
  email: string;
  phone_one: string;
  phone_two?: string;
  state_id: number;
  city_id: number;
  address: string;
  website?: string;
  social?: string;
};

export type IMemo = {
  memo: string;
  supplier_id: number;
  created_by: number;
};
