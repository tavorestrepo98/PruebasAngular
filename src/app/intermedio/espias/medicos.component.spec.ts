import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

import { of, from, throwError } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;

    let service = new MedicosService(null);

    beforeEach( () => {
      componente = new MedicosComponent(service);
    });


    it('Probar ngOnInit de MedicosComponent', () => {

      spyOn(service, 'getMedicos').and.callFake(() => {
        return from(['medico1', 'Medico2', 'Medico3']);
      })


      componente.ngOnInit();

      expect(componente.medicos.length).toBeGreaterThanOrEqual(0);

    });


    //Esta prueba sirve para verificar si un método en un componente ha llamado un
    //método de un servicio
    it('Debe de llamar al servidor para agregar un médico', () => {

      //El espía me sirve para simular el llamado a un método de un servicio
      const spy = spyOn(service, 'agregarMedico').and.callFake(medico => {
        return of();
      })

      componente.agregarMedico();

      expect(spy).toHaveBeenCalled();

    });

    it('Debe de agregar un nuevo medico al arreglo de medicos', () => {
      const medico = {
        id:1,
        nombre: 'Gustavo'
      };

      //Sumulamos que egregarMedico me devuelve un observable con el médico
      spyOn(service, 'agregarMedico').and.returnValue(from([medico]));

      //ejecutamos agregarMedico de componente
      componente.agregarMedico();

      //Buscamos en el arreglo de médicos el médico que agregamos
      expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

    });

    it('Si falla la adición, a propiedad mensajeError, debe ser igual al error del servicio', () => {

      const myError = 'No se pudo Agregar un médico';

      //Este espía me ayuda para saber si retorna un Error
      spyOn(service, 'agregarMedico').and.returnValue(throwError(myError));

      componente.agregarMedico();

      expect(componente.mensajeError).toBe(myError);

    });

    it('Debe de llamar al servidor para borrar un médico', () => {

      let id: string = '123';

      spyOn(window, 'confirm').and.returnValue(true);

      const spy = spyOn(service, 'borrarMedico').and.callFake(medico => {
        return of();
      });

      componente.borrarMedico(id);

      expect(spy).toHaveBeenCalledWith(id);

    });

    it('No debe de llamar al servidor para borrar un médico', () => {

      let id: string = '123';

      spyOn(window, 'confirm').and.returnValue(false);

      const spy = spyOn(service, 'borrarMedico').and.callFake(medico => {
        return of();
      });

      componente.borrarMedico(id);

      expect(spy).not.toHaveBeenCalledWith(id);

    });


});
