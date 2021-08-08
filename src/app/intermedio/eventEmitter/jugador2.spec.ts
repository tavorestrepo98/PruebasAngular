import { Jugador2 } from './jugador2';

describe('Prueba EventEmmiter', () => {

  let jugador: Jugador2;

  beforeEach(() => jugador = new Jugador2());

  it('Debe de emitir un evento cuando el jugador recibe daño', () => {

    let nuevoHp: number;

    jugador.hpCambia.subscribe( hp => {
      nuevoHp = hp;
    });

    jugador.recibeDanio(1000);

    expect(nuevoHp).toBe(0);

  });

})
