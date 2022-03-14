
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
   mainDiv.classList.add(`mainDiv`)
  


  const div4 = document.createElement('div');
  const Par4 = document.createElement('p');
  Par4.textContent = `last one`;
  div4.appendChild(Par4)



  mainDiv.appendChild(food1()) 
  mainDiv.appendChild(food2())
  mainDiv.appendChild(food3())
  mainDiv.appendChild(food4())

  return mainDiv;

}

//this will be testing for a cleaner code, putting the foods in a seperate functions 
function food1() {
  const div1 = document.createElement('div');
  div1.classList.add('foodDiv')

  const Par1 = document.createElement('p');
  Par1.textContent = `By the promised and forgotten land it cames with  the elden ring hopfullly will try it one day`;
  Par1.classList.add(`foodText`)

  const image1 = document.createElement('img');
  image1.classList.add(`foodImg`)
  image1.src = "img/img1.jpg"

  div1.appendChild(image1)
  div1.appendChild(Par1)
 

  return div1;

}

function food2() {
  const div2 = document.createElement('div');
  div2.classList.add('foodDiv')

  const Par2 = document.createElement('p');
  Par2.textContent = `the famous dark sign in the DS, to which you lose everything for a change of returning safely `;
  Par2.classList.add(`foodText`)

  const image2 = document.createElement('img');
  image2.classList.add(`foodImg`)
  image2.src = "img/img2.jpg"

  div2.appendChild(image2)
  div2.appendChild(Par2)
 

  return div2;

}

function food3() {
  const div3 = document.createElement('div');
  div3.classList.add('foodDiv')
  const Par3 = document.createElement('p');
  Par3.textContent = `this one is the third one ,,  `;
  Par3.classList.add(`foodText`)

  const image3 = document.createElement('img');
  image3.classList.add(`foodImg`)
  image3.src = "img/img3.jpg"

  div3.appendChild(image3)
  div3.appendChild(Par3)
 

  return div3;

}

function food4() {
  const div4 = document.createElement('div');
  div4.classList.add('foodDiv')
  const Par4 = document.createElement('p');
  Par4.textContent = `the last one ,,  `;
  Par4.classList.add(`foodText`)

  const image4 = document.createElement('img');
  image4.classList.add(`foodImg`)
  image4.src = "img/img4.png"

  div4.appendChild(image4)
  div4.appendChild(Par4)
 

  return div4;

}



  //here it selecets the "Body" part to put the elemnts in it
const bodyDiv = document.getElementById('body')
bodyDiv.appendChild(menu())
 