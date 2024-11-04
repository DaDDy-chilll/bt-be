export class TokenPayloadInstance {
  id: number | undefined;
  name: string | null;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export type TokenPayload = TokenPayloadInstance;
