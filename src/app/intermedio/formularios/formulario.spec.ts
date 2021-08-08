import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';


describe('Pruebas en formularios', () => {

  let component: FormularioRegister;

  beforeEach(() => component = new FormularioRegister(new FormBuilder()));

  it('Formulario debe de tener 2 campos', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  xit('El Email debe ser obligarotio', () => {
    const control = component.emailControl;
    control.setValue('');

    expect(control.hasError('required')).toBeFalsy();
  });

  it('El Email debe ser un email válido', () => {
    const control = component.emailControl;
    control.setValue('tavo.estrepo@gmail.com');

    expect(control.valid).toBeTruthy();
  });

});
