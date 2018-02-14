export class ApplicationGeneral {

  constructor(email: string, product: string, amount: number, purpose: string, originatingSystem: string, language: string, source: string, lender: string, preferredContactTime: string) {
    this._email = email;
    this._product = product;
    this._amount = amount;
    this._purpose = purpose;
    this._originatingSystem = originatingSystem;
    this._language = language;
    this._source = source;
    this._lender = lender;
    this._preferredContactTime = preferredContactTime;
  }
  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get product(): string {
    return this._product;
  }

  set product(value: string) {
    this._product = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  get purpose(): string {
    return this._purpose;
  }

  set purpose(value: string) {
    this._purpose = value;
  }

  get originatingSystem(): string {
    return this._originatingSystem;
  }

  set originatingSystem(value: string) {
    this._originatingSystem = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }

  get source(): string {
    return this._source;
  }

  set source(value: string) {
    this._source = value;
  }

  get lender(): string {
    return this._lender;
  }

  set lender(value: string) {
    this._lender = value;
  }

  get preferredContactTime(): string {
    return this._preferredContactTime;
  }

  set preferredContactTime(value: string) {
    this._preferredContactTime = value;
  }
  private _email: string;
  private _product: string;
  private _amount: number;
  private _purpose: string;
  private _originatingSystem: string;
  private _language: string;
  private _source: string;
  private _lender: string;
  private _preferredContactTime: string;
}
