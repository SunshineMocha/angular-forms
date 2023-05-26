import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  @Input()
  data = { email: "test@gmail.com", password: "ciao1234", newsletter: false }

  formGroup = new FormGroup({
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    password: new FormControl(this.data.password, [Validators.required, Validators.minLength(8)]),
    newsletter: new FormControl(this.data.newsletter)
  });

  ngOnInit(){
    this.formGroup.valueChanges.subscribe((val)=> console.log(val))
  }

  get email(){
    return this.formGroup.get("email") as FormControl
  }
  get password(){
    return this.formGroup.get("password") as FormControl
  }

  submitForm(){
    console.log(this.data);
  }
}
