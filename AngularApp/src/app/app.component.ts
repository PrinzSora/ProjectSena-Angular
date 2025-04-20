import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent } from '../app/login/login.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent],
  template: '<app-login></app-login><router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'AngularApp';
}