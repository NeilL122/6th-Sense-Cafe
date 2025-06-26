import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

   loginData = {
    email: '',
    password: '',
  };

  constructor(private toastCtrl: ToastController, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async onLogin() {
    const toast = await this.toastCtrl.create({
      message: `Welcome back, ${this.loginData.email}!`,
      duration: 2000,
      color: 'success',
    });
    toast.present();

    this.loginData = { email: '', password: '' };

    this.router.navigateByUrl('/home');
  }
}
