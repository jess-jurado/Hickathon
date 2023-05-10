import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'holiday-selector';
  btnDisabled = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  //user = 'example@hicron.com';
  //pass = '******';
  user = {
    name: '',
    pass: '1',
    email: 'a',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  }

  sendInformation() {
    const emailInput = (document.querySelector('input[type="email"]') as HTMLInputElement).value;
    const passwordInput = (document.querySelector('input[type="password"]') as HTMLInputElement).value;
    if (passwordInput === this.user.pass && emailInput === this.user.email) {
      console.log("login acept")
    } else {
      console.log("wrong password or user")
    }
  }
}
