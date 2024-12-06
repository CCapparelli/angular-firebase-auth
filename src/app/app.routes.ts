import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
          {
    path: 'login',
    component: LoginComponent,
  },
];

