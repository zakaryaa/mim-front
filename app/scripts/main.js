/**
 * We await the parsing of html to DOM
 */
window.addEventListener('DOMContentLoaded', app);

function app() {
  const hamburgerButton = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburgerButton.addEventListener('click', function() {
    menu.classList.toggle('menu--open');
  });
}

function person(isCatPerson) {
  let pet;
  if (isCatPerson) {
    pet = 'Puss in boots';
  } else {
    pet = 'Lucy';
  }
}
const people = ['John', 'Lucy', 'Jim'];

people.forEach(function(person, index) {
  console.log(person, index);
});

person(true);
