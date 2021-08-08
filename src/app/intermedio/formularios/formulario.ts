import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class FormularioRegister {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.buildForm();
  }


  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get emailControl(){
    return this.form.get('email');
  }

  get passwordControl(){
    return this.form.get('password');
  }

}
