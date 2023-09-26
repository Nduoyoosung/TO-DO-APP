// open menu command
let openMenu = document.querySelector('header i');
let menu = document.querySelector('aside');

openMenu.addEventListener('click', () => {
  menu.classList.toggle('show');
  openMenu.classList.toggle('bx-x');
});

// menu items
let link = document.getElementById('link');
let linkT = document.getElementById('link2');
let linkR = document.getElementById('link3');
let linkF = document.getElementById('link4');
let linkV = document.getElementById('link5');
let linkS = document.getElementById('link6');
let linkN = document.getElementById('link7');

link.addEventListener('click', () => {
  menu.classList.remove('show');
  openMenu.classList.remove('bx-x');
});
linkT.addEventListener('click', () => {
  menu.classList.remove('show');
  openMenu.classList.remove('bx-x');
});
linkR.addEventListener('click', () => {
  menu.classList.remove('show');
  openMenu.classList.remove('bx-x');
});
linkF.addEventListener('click', () => {
  menu.classList.remove('show');
  openMenu.classList.remove('bx-x');
});
linkV.addEventListener('click', () => {
  menu.classList.remove('show');
  openMenu.classList.remove('bx-x');
});
linkS.addEventListener('click', () => {
  menu.classList.remove('show');
  openMenu.classList.remove('bx-x');
});
linkN.addEventListener('click', () => {
  menu.classList.remove('show');
  openMenu.classList.remove('bx-x');
});



const inputField = document.getElementById("inputField");
const addBtn = document.getElementById("addinput");
const clearBtn = document.getElementById("clear");
const itemContainer = document.querySelector('ol');

 let item

addBtn.addEventListener('click', () => {
  let input = inputField.value;
  item = document.createElement('li');
  item.innerText = input;

  if (!input) {
    alert('Please add an item');
  } else {
    itemContainer.appendChild(item);
  }
});

clearBtn.addEventListener('click', () => {
  while (itemContainer.firstChild) {
    itemContainer.removeChild(itemContainer.firstChild);
  }
});


// text to display if list is empty.
let text = document.createElement('p');
text.innerText = 'your list is empty.';
