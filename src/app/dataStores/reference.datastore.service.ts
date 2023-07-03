import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from, take } from 'rxjs';
import { IReferenceCategory } from '../interfaces/reference.interface';

@Injectable({
  providedIn: 'root',
})
export class ReferenceDataService {
  private reference = new Subject<{ ref: string }>();
  private category = new Subject<{ isNewCategory: boolean }>();

  private referenceCategoryData = new BehaviorSubject<IReferenceCategory[]>([
    {
      id: '1',
      name: 'O/L Subjects',
    },
    {
      id: '2',
      name: 'A/L Subjects',
    },
    {
      id: '3',
      name: 'Districts',
    },
  ]);
  private referenceDetails = this.referenceCategoryData.asObservable();

  referenceChange(value: string) {
    this.reference.next({ ref: value });
  }

  addReferenceCategory() {
    this.category.next({ isNewCategory: true });
  }

  addReferenceCategoryData(data: IReferenceCategory[]) {
    this.referenceCategoryData.next(data);
  }

  getReferenceCategoryAddAction(): Observable<{ isNewCategory: boolean }> {
    return this.category.asObservable();
  }

  getChangeRefValue(): Observable<{ ref: string }> {
    return this.reference.asObservable();
  }

  getReferenceCategoryData(): Observable<IReferenceCategory[]> {
    return this.referenceDetails;
  }
}
