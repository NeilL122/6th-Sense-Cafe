import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  loginData = { email: '', password: '' };

  constructor(private toastCtrl: ToastController, private router: Router, private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.loginData).subscribe(async (response) => {
      const toast = await this.toastCtrl.create({
        message: response.message,
        duration: 2000,
        color: 'success',
      });
      toast.present();

      this.router.navigateByUrl('/home');
    }, async (error) => {
      const toast = await this.toastCtrl.create({
        message: 'Login failed!',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    });
  }
}