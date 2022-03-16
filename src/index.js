import _ from 'lodash';
import  menu  from './modules/menu/food'

    //here it selecets the "Body" part to put the elemnts in it
const bodyDiv = document.getElementById('body')



const aboutButton = document.getElementById('about');
aboutButton.addEventListener("click" , function(e) {

  console.log('about presssssessss')

// bodyDiv.appendChild(about());

});

const menuButton = document.getElementById('menu');
menuButton.addEventListener("click" , function(e) {

 bodyDiv.appendChild(menu());

});
 
 
function about () {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('aboutDiv')

  const aboutPara = document.createElement('p')
  


 }