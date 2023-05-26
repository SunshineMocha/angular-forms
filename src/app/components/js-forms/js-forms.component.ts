import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-js-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './js-forms.component.html',
  styleUrls: ['./js-forms.component.scss']
})
export class JsFormsComponent {

  @Input()
  id!: string
  @Input()
  // data: any
  data!: { email: string, password: string, newsletter: boolean }

  ngAfterViewInit(){
    // alert(this.id)
    let form = document.getElementById(this.id) as HTMLFormElement;

    (form.elements.namedItem("email") as any).value = this.data.email,
    (form.elements.namedItem("password") as any).value = this.data.password,
    (form.elements.namedItem("newsletter") as any).checked = this.data.newsletter
  }

  submitForm(event: Event){
    event.preventDefault(); // intercetto l'evento di default (refresh della pagina)
    let form = document.getElementById("registration") as HTMLFormElement;
    // Rilevamento singolo degli input
    // let email = (form.elements.namedItem("email") as any).value
    // let password = (form.elements.namedItem("password") as any).value
    // let newsletter = (form.elements.namedItem("newsletter") as any).checked
    // Creazione di un oggetto/JSON
    let formData = {
      email:(form.elements.namedItem("email") as any).value, // named item prende elemento document cercando il name
      password:(form.elements.namedItem("password") as any).value,
      newsletter:(form.elements.namedItem("newsletter") as any).checked
    };

    (form.elements.namedItem("email") as any).value = formData.email.toLowerCase() // manipolazione contenuto

    console.log(formData);
    alert(formData.email + " " + formData.password + " " +formData.newsletter);
  }
}
