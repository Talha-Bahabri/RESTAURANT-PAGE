
import _ from 'lodash';
// import './style.css';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

   return element;
 }

 document.body.appendChild(component());                    
 


 
 // import _ from 'lodash';
// import './style.css'

// // console.log(`your computer has virus`)
// console.log(` @@ new watch menue`)

// const hehe = document.getElementById("hehe");

// // const divHeader = getElementById('header');
// // const aha = document.createElement('p')
// aha.classList.add('testing')


// hehe.classList.add(`testing`)
// // hehe.textContent = `AHAHAH`

// divHeader.appendChild(aha)


// console.log(`444444444444444444444444444`)

