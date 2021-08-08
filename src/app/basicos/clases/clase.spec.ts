import { Jugador } from './clase';

describe('Pruebas de clase', () => {

  const jugador = new Jugador();

  beforeAll(() => {
    //console.log('BeforeAll');
  })
  beforeEach(() => {
    //console.log('BeforeEach');
  })

  afterAll(() => {
    //console.log('afterAll');
  });
  afterEach(() => {
    jugador.hp = 100;
  });

  it('Debe de retornar 80 hp si recibe 20 de daño', () => {

    const resp = jugador.recibeDanio(20);

    expect(resp).toBe(80);

  });

  it('Debe de retornar 50 hp si recibe 50 de daño', () => {

    const resp = jugador.recibeDanio(50);

    expect(resp).toBe(50);

  });

  it('Debe de retornar 0 hp si recibe 101 de daño', () => {

    const resp = jugador.recibeDanio(101);

    expect(resp).toBe(0);

  });

})
