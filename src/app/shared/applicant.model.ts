export class Applicant {

  constructor(applicationNumber: string, firstName: string, middleInitial: string, lastName: string, suffixName: string, dateOfBirth: Date, ssn: string, streetAddress: string, city: string, state: string, zipcode: string, phone: string) {
    this._applicationNumber = applicationNumber;
    this._firstName = firstName;
    this._middleInitial = middleInitial;
    this._lastName = lastName;
    this._suffixName = suffixName;
    this._dateOfBirth = dateOfBirth;
    this._ssn = ssn;
    this._streetAddress = streetAddress;
    this._city = city;
    this._state = state;
    this._zipcode = zipcode;
    this._phone = phone;
  }
  get applicationNumber(): string {
    return this._applicationNumber;
  }

  set applicationNumber(value: string) {
    this._applicationNumber = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get middleInitial(): string {
    return this._middleInitial;
  }

  set middleInitial(value: string) {
    this._middleInitial = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get suffixName(): string {
    return this._suffixName;
  }

  set suffixName(value: string) {
    this._suffixName = value;
  }

  get dateOfBirth(): Date {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: Date) {
    this._dateOfBirth = value;
  }

  get ssn(): string {
    return this._ssn;
  }

  set ssn(value: string) {
    this._ssn = value;
  }

  get streetAddress(): string {
    return this._streetAddress;
  }

  set streetAddress(value: string) {
    this._streetAddress = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get zipcode(): string {
    return this._zipcode;
  }

  set zipcode(value: string) {
    this._zipcode = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  private _applicationNumber: string;
  private _firstName: string;
  private _middleInitial: string;
  private _lastName: string;
  private _suffixName: string;
  private _dateOfBirth: Date;
  private _ssn: string;
  private _streetAddress: string;
  private _city: string;
  private _state: string;
  private _zipcode: string;
  private _phone: string;

}
