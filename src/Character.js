const correctTypes = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type) {
    this.checkTheName(name);
    this.checkType(type);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  checkTheName(name) {
    if (name.length <= 2 && name.length < 10) {
      throw new Error('Некорректное имя');
    }
  }

  checkType(type) {
    if (!correctTypes.some((typeFromArray) => typeFromArray === type)) {
      throw new Error('Некорректный тип');
    }
  }
}
