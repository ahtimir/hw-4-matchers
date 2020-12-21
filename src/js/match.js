/* eslint-disable linebreak-style */

export default function sortHeroes(heroes) {
  if (heroes === undefined || null) {
    throw new Error('Ошибка отряда!');
  }
  heroes.sort((a, b) => b.health - a.health);
  return heroes;
}
