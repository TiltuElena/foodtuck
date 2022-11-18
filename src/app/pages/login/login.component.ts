import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseModule} from "../../components/base/base.module";
import {FormFieldsInterface} from "../../ts/interfaces";
import {PageRoutes} from "../../ts/enum";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, BaseModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  formFields: FormFieldsInterface[] = [
    {
      id: 1,
      iconUrl: 'assets/icons/userIconForm.png',
      type: 'text',
      placeholder: 'Name',
    },
    {
      id: 2,
      iconUrl: 'assets/icons/envelopeIcon.png',
      type: 'email',
      placeholder: 'Email',
    },
    {
      id: 3,
      iconUrl: 'assets/icons/lockIcon.png',
      type: 'password',
      placeholder: 'Password',
    },
  ];

  constructor() {}

  get forgotPasswordUrl(): string {
    return PageRoutes.ForgotPassword;
  }

  ngOnInit(): void {}

  login(): void {
    console.log('login');
  }
}
