import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-validation-tutorial';
  userEmails = new FormGroup({
    primaryEmail: new FormControl('', [
      Validators.required, 
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    secondaryEmail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]) 
  })

  get primEmail() {
    return this.userEmails.get('primaryEmail')
  }

  get secondEmail() {
    return this.userEmails.get('secondaryEmail')
  }
}
