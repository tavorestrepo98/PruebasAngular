import { usuarioLogueado } from './boolean';

describe('Probando Booleanos', () => {

  it('La función debe de retornar true', () => {
    const res = usuarioLogueado();
    expect(res).toBeTruthy();
  })

})
