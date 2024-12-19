import Color from "./color.class";
class GemIcon {
  public id?: number | undefined;
  public icon_path?: string;
  public del_flg?: boolean;

  constructor(gem_icon: GemIcon) {
    this.id = Number(gem_icon.id);
    this.icon_path = gem_icon.icon_path;
    this.del_flg = gem_icon.del_flg;
  }
}
class GemType {
  public id?: number | undefined;
  public name?: string;
  public color_id?: number;
  public icon_id?: number;
  public del_flg?: boolean;
  public created_at?: string;
  public updated_at?: string;

  public m_colors?: Color;
  public m_gem_icons?: GemIcon;

  constructor(gem_type: GemType) {
    this.id = Number(gem_type.id);
    this.name = gem_type.name;
    this.color_id = Number(gem_type.color_id);
    this.icon_id = Number(gem_type.icon_id);
    this.del_flg = gem_type.del_flg;
    this.created_at = gem_type.created_at
      ? new Date(gem_type.created_at).toLocaleString("en-US", {
          timeZone: "Asia/Yangon",
        })
      : undefined;
    this.updated_at = gem_type.updated_at
      ? new Date(gem_type.updated_at).toLocaleString("en-US", {
          timeZone: "Asia/Yangon",
        })
      : undefined;
    this.del_flg = gem_type.del_flg;
    this.m_colors = gem_type.m_colors
      ? new Color(gem_type.m_colors)
      : undefined;
    this.m_gem_icons = gem_type.m_gem_icons
      ? new GemIcon(gem_type.m_gem_icons)
      : undefined;
  }
}

export { GemIcon, GemType };
