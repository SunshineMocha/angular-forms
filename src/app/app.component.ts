import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms';

  formData = {
    email: "miaemail@io.com",
    password: "miapassword",
    newsletter: true
  }
  formData2 = {
    email: "pipo@io.com",
    password: "miapassword0",
    newsletter: false
  }
}
