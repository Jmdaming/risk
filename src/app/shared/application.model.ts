import {Applicant} from './applicant.model';
import {ApplicationGeneral} from './application-general.model';

export class Application {

  constructor() {
    this._primaryApplicant = new Applicant('000000088432122', 'John', 'A',
      'Smith', '', new Date('1990-01-01'), '123456789', '1234 Main St',
      'Mayberry', 'NC', '12345', '1234567890');
    this._secondaryApplicant = new Applicant('', '', '',
      '', '', new Date(''), '', '',
      '', '', '', '');
    this._applicationGeneral = new ApplicationGeneral('jasmith@gmail.com', 'LOAN', 10000.00,
      'New Truck', 'ICE', 'E', '', 'Who Financial', '15:00');
  }

  get secondaryApplicant(): Applicant {
    return this._secondaryApplicant;
  }

  set secondaryApplicant(value: Applicant) {
    this._secondaryApplicant = value;
  }

  get applicationGeneral(): ApplicationGeneral {
    return this._applicationGeneral;
  }

  set applicationGeneral(value: ApplicationGeneral) {
    this._applicationGeneral = value;
  }

  get primaryApplicant(): Applicant {
    return this._primaryApplicant;
  }

  set primaryApplicant(value: Applicant) {
    this._primaryApplicant = value;
  }

  private _primaryApplicant: Applicant;
  private _secondaryApplicant: Applicant;
  private _applicationGeneral: ApplicationGeneral;
}
