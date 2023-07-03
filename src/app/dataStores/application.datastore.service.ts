import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, take } from 'rxjs';
import { IInitPage, IPageDetail } from '../interfaces/application.interfaces';

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
