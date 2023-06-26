import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, take } from 'rxjs';

// constant
export const CONTROLLER_TYPES = {
  TEXT: 'TEXT',
  RADIO: 'RADIO',
  FILE: 'FILE',
  DROPDOWNS: 'DROPDOWNS',
  CHECKBOX: 'CHECKBOX',
};

// ---------------------- Constant End ---------------------------

// interfaces

export interface IInitPage {
  title: string;
  subTitle?: string;
  extraInfo?: string;
}

export interface IPageDetail {
  viewValue: string;
  value: string;
}

// ------------------------- Interfaces End ------------------------
@Injectable({
  providedIn: 'root',
})
export class ApplicationDataStore {
  private pageHeader = new BehaviorSubject<IInitPage>({
    title: '',
    subTitle: '',
    extraInfo: '',
  });

  private pageData = new BehaviorSubject<IPageDetail[]>([]);

  private pageHeaderDetails = this.pageHeader.asObservable();
  private pageDetails = this.pageData.asObservable();

  // Get Values
  getInitialPageHeaderDetails(): Observable<IInitPage> {
    return this.pageHeaderDetails;
  }

  getPageDetails(): Observable<IPageDetail[]> {
    return this.pageDetails;
  }

  // Set Values
  setInitialPageHeaderDetails(initialValues: IInitPage) {
    this.pageHeader.next(initialValues);
  }

  setPageData(data: IPageDetail[]) {
    this.pageData.next(data);
  }
}
