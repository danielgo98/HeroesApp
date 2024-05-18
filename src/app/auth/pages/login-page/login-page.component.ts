import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  constructor(private authService: AuthService,
              private router: Router,
  ) {}

  onLogin(): void {
    this.authService.login('daniel@gmail.com', '12345')
    .subscribe(user => {
      this.router.navigate(['/']);
    });
  }

}
