// src/models/User.ts

class Tools {
  public id?: number | undefined;
  public method: number;
  public category: string;
  public weight: string;
  public one_kyatt: number;
  public five_muu: number;
  public one_mat: number;
  public one_mu: number;
  public one_pae: number;
  public created_at?: string;
  public updated_at?: string;
  public del_flg?: boolean;

  constructor(tool: Tools) {
    this.id = tool.id;
    this.method = tool.method;
    this.category = tool.category;
    this.weight = tool.weight;
    this.one_kyatt = tool.one_kyatt;
    this.five_muu = tool.five_muu;
    this.one_mat = tool.one_mat;
    this.one_mu = tool.one_mu;
    this.one_pae = tool.one_pae;
    this.created_at = tool.created_at
      ? new Date(tool.created_at).toLocaleString("en-US", {
          timeZone: "Asia/Yangon",
        })
      : undefined;
    this.updated_at = tool.updated_at
      ? new Date(tool.updated_at).toLocaleString("en-US", {
          timeZone: "Asia/Yangon",
        })
      : undefined;
    this.del_flg = tool.del_flg;
  }
  getTool(): Tools {
    this.id = Number(this.id);
    return this;
  }
}

export default Tools;
