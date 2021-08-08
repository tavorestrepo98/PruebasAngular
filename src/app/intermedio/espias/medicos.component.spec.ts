import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

import { of, from } from 'rxjs';

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
    it('Debe de llamar al servicio para agregar un médico', () => {

      //El espía me sirve para simular el llamado a un método de un servicio
      const spy = spyOn(service, 'agregarMedico').and.callFake(medico => {
        return of();
      })

      componente.agregarMedico();

      expect(spy).toHaveBeenCalled();

    });


});
