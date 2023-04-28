import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private _formData = new BehaviorSubject<any>({});
  public formData$ = this._formData.asObservable();

  saveForm(data: any) {
    this._formData.next(data);
  }
}
