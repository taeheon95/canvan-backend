import { IsNumber, IsString } from 'class-validator';

class List {
  private _id: number;
  private _seq: number;
  private _name: string;
  private _insertTime: number;
  private _updateTime: number;

  constructor(id: number, seq: number, name: string) {
    this._id = id;
    this._seq = seq;
    this._name = name;
    this._insertTime = new Date().getTime();
    this._updateTime = new Date().getTime();
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
}

export class CreateListDto {
  @IsNumber()
  seq: number;
  @IsString()
  name: string;
}

export class UpdateListDto {
  @IsNumber()
  seq?: number;
  @IsString()
  name?: string;
}

export default List;
