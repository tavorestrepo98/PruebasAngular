import { incrementar } from './numero';

describe('Prueba de numeros', () => {

  it('Debe retornar un número', () => {

    const numero: number = incrementar(40);

    expect(typeof numero).toBe('number');

  });

  it('Debe retornar 100 si el número ingresado es mayor a 100', () => {

    const incremento: number = incrementar(101);

    expect(incremento).toBe(100);

  });

  it('Debe retornar número menor a 100 si el número ingresado es menor a 100', () => {

    const incremento: number = incrementar(45);

    expect(incremento).toBeLessThan(100);

  });

})
