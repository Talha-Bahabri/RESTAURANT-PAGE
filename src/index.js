import _ from 'lodash';
import  menu  from './modules/menu/food' 

 function component() {
   const element = document.createElement('div');

  //  Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  

  console.log(`444444444444444444444444444`)

   return element;
 }
 document.body.appendChild(component());                    
   

  //here it selecets the "Body" part to put the elemnts in it
const bodyDiv = document.getElementById('body')
bodyDiv.appendChild(menu())
 


const aboutButton = document.getElementById('about');
aboutButton.addEventListener("click" , function(e) {
  console.log(`about is pressed`);
});