export class CardDto {
  private _id: string;
  private _seq: number;
  private _name: string;
  private _insertTime: number;
  private _updateTime: number;
  private _list_id: string;

  constructor(id: string, seq: number, name: string, list_id: string) {
    this._id = id;
    this._seq = seq;
    this._name = name;
    this._insertTime = new Date().getTime();
    this._updateTime = new Date().getTime();
    this._list_id = list_id;
  }

  public get id() {
    return this._id;
  }
  public get seq(): number {
    return this._seq;
  }
  public set seq(value: number) {
    this._seq = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get insertTime(): number {
    return this._insertTime;
  }
  public get updateTime(): number {
    return this._updateTime;
  }
  public set updateTime(value: number) {
    this._updateTime = value;
  }
  public get list_id(): string {
    return this._list_id;
  }
  public set list_id(value: string) {
    this._list_id = value;
  }
}

export class CreateCardDto {
  seq: number;
  name: string;
  list_id: string;
}

export class UpdateCardDto {
  seq?: number;
  name?: string;
  list_id?: string;
}
