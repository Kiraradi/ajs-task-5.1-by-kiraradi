import Bowman from '../src/Bowman.js';
import Swordsman from '../src/Swordsman.js';
import Magician from '../src/Magician.js';
import Undead from '../src/Undead.js';
import Zombie from '../src/Zombie.js';
import Daemon from '../src/Daemon.js';

test('Character Creation Test - Bowman', () => {
  const result = new Bowman('Rob', 'Bowman');

  const personBowman = {
    name: 'Rob',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(personBowman);
});

test.each([
  ['error name', 'Rb', 'Bowman'],
  ['error type', 'Bob', 'lol'],
])('error throwing test %s', (error, name, type) => {
  expect(() => {
    new Bowman(name, type);
  }).toThrow();
});

test('Character Creation Test - Swordsman', () => {
  const result = new Swordsman('Rob', 'Swordsman', 75, 5, 75, 90);

  const personBowman = {
    name: 'Rob',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(result).toEqual(personBowman);
});

test('Character Creation Test - Magician', () => {
  const result = new Magician('Rob', 'Magician', 75, 5, 75, 90);

  const personBowman = {
    name: 'Rob',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(result).toEqual(personBowman);
});

test('Character Creation Test - Undead', () => {
  const result = new Undead('Rob', 'Undead', 75, 5, 75, 90);

  const personBowman = {
    name: 'Rob',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(personBowman);
});

test('Character Creation Test - Zombie', () => {
  const result = new Zombie('Rob', 'Zombie', 75, 5, 75, 90);

  const personBowman = {
    name: 'Rob',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(result).toEqual(personBowman);
});

test('Character Creation Test - Daemon', () => {
  const result = new Daemon('Rob', 'Daemon', 75, 5, 75, 90);

  const personBowman = {
    name: 'Rob',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(result).toEqual(personBowman);
});
