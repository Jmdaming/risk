import {EventEmitter, Injectable} from '@angular/core';
import { Application } from '../shared/application.model';

@Injectable()
export class ApplicationService {
  applicationSelected = new EventEmitter<Application>();

  get applications(): Application[] {
    return this._applications.slice();
  }

  private _applications: Application[];

  constructor() {
    this._applications =  [new Application(), new Application(), new Application(), new Application()];
  }

}
