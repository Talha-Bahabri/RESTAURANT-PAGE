
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
  const Par1 = document.createElement('p');
  Par1.textContent = `here is a text, above it a food pic`;
  
  const image1 = document.createElement('img');
  image1.classList.add(`foodImg`)
  image1.src = "img/img1.jpg"

  div1.appendChild(image1)
  div1.appendChild(Par1)
 



  const div2 = document.createElement('div');
  const Par2 = document.createElement('p');
  Par2.textContent = `second para`;
  div2.appendChild(Par2)

  const div3 = document.createElement('div');
  const Par3 = document.createElement('p');
  Par3.textContent = `third perhaps ?`;
  div3.appendChild(Par3)


  const div4 = document.createElement('div');
  const Par4 = document.createElement('p');
  Par4.textContent = `last one`;
  div4.appendChild(Par4)



  mainDiv.appendChild(div1)
  mainDiv.appendChild(div2)
  mainDiv.appendChild(div3)
  mainDiv.appendChild(div4)
  return mainDiv;

}

  //here it selecets the "Body" part to put the elemnts in it
const bodyDiv = document.getElementById('body')
bodyDiv.appendChild(menu())
 