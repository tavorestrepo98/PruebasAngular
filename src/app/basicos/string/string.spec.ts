import { mensaje } from './string';

describe('Pruebas de strings', () => {
  it('Debe de regresar un string', () => {

    const res = mensaje('Gustavo');


    expect(typeof res).toBe("string");

  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre: string = 'Gustavo';

    const res = mensaje(nombre);

    expect(res).toContain(nombre);

  })

});
