export class PhotoInstance {
  id?: bigint;
  code?: string;
  photo_path: string;
  constructor(id: bigint, code: string, photo_path: string) {
    this.id = id;
    this.code = code;
    this.photo_path = photo_path;
  }
}
