/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
const boton = document.querySelector('#boton');

const menu = document.querySelector('#menu');

boton.addEventListener('click',()=> {
  console.log('ouch');
  menu.classList.toggle('hidden')
})

+( function() {
  console.log('Hello, UOC!');
} )();
