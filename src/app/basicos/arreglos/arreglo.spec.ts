import { retornarRobots } from './arreglo';

describe('Prueba en arreglos', () => {

  xit('debe de retornar al menos 3 robots', () => {
    const res = retornarRobots();

    expect(res.length).toBeGreaterThanOrEqual(3);

  })

  it('debe de Existir Megaman y ultron', () => {
    const res = retornarRobots();

    expect(res).toContain('MegaMan');
    expect(res).toContain('Ultron');

  })

})
