import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CONTROLLER_TYPES } from 'src/app/constants';
import { IFields, IFormArray } from '../recruitment-application/recruitment-application.component';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
})

export class ApplicationFormComponent implements  OnInit , OnChanges {
  FIELD_TYPES = CONTROLLER_TYPES;
  @Input() fieldArray? : IFields[] = [];


  ngOnInit(): void{
//
  }
  ngOnChanges(){
//
  }
}
