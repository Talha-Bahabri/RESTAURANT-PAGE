
import _ from 'lodash';
// import './style.css';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  

  console.log(`444444444444444444444444444`)

   return element;
 }

 document.body.appendChild(component());                    
 


function menu() {
  //the main div 
  const mainDiv = document.createElement('div');
  
  const div1 = document.createElement('div');
  const testPar1 = document.createElement('p');
  testPar1.textContent = `here is a text, above it a food pic`;
  div1.appendChild(testPar1)
 



  const div2 = document.createElement('div');
  const testPar2 = document.createElement('p');
  testPar2.textContent = `second para`;
  div2.appendChild(testPar2)

  const div3 = document.createElement('div');
  const testPar3 = document.createElement('p');
  testPar3.textContent = `third perhaps ?`;
  div3.appendChild(testPar3)


  const div4 = document.createElement('div');
  const testPar4 = document.createElement('p');
  testPar4.textContent = `last one`;
  div4.appendChild(testPar4)



  mainDiv.appendChild(div1)
  mainDiv.appendChild(div2)
  mainDiv.appendChild(div3)
  mainDiv.appendChild(div4)
  return mainDiv;

}
  
const bodyDiv = document.getElementById('body')
bodyDiv.appendChild(menu())
 