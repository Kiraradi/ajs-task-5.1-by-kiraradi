import Bowman from './Bowman.js';
import Swordsman from './Swordsman.js';
import Magician from './Magician.js';
import Undead from './Undead.js';
import Zombie from './Zombie.js';
import Daemon from './Daemon.js';

const personBowman = new Bowman('Rob', 'Bowman', 75, 5, 75, 90);
const personSwordsman = new Swordsman('Lev', 'Swordsman', 52, 3, 50, 80);
const personMagician = new Magician('Ursula', 'Magician', 100, 11, 150, 200);
const personUndead = new Undead('Rick', 'Undead', 15, 2, 10, 5);
const personZombie = new Zombie('Jack', 'Zombie');
const personDaemon = new Daemon('Velzevul', 'Daemon');

console.log(personBowman, personSwordsman, personMagician, personUndead, personZombie);
