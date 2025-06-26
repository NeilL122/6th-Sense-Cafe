import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {

  registerData = { fullName: '', email: '', password: '' };

  constructor(private toastCtrl: ToastController, private router: Router, private authService: AuthService) {}

  onRegister() {
    this.authService.register(this.registerData).subscribe(async (response) => {
      const toast = await this.toastCtrl.create({
        message: response.message,
        duration: 2000,
        color: 'success',
      });
      toast.present();

      this.router.navigateByUrl('/home');
    }, async (error) => {
      const toast = await this.toastCtrl.create({
        message: 'Registration failed!',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    });
  }
}
