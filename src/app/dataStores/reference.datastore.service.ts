import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReferenceDataService {
  private reference = new Subject<{ ref: string }>();
  private category = new Subject<{ isNewCategory: boolean }>();

  referenceChange(value: string) {
    this.reference.next({ ref: value });
  }

  addReferenceCategory() {
    this.category.next({ isNewCategory: true });
  }

  getReferenceCategoryAddAction() {
    return this.category.asObservable();
  }

  getChangeRefValue(): Observable<any> {
    return this.reference.asObservable();
  }
}
