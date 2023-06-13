import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ncpa-app';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // TODO: Should change, this is not the correct method
   // this.router.navigate(['/app/auth/login']);
  }
}


