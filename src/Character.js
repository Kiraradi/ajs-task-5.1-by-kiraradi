const correctTypes = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;

    this.checkTheName();
    this.checkType();
  }

  checkTheName() {
    if (this.name.length <= 2 && this.name.length < 10) {
      throw new Error('Некорректное имя');
    }
  }

  checkType() {
    if (!correctTypes.some((type) => type === this.type)) {
      throw new Error('Некорректный тип');
    }
  }
}
