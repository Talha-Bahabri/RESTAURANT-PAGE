import _ from 'lodash';
import  menu  from './modules/menu/food'

 
  //here it selecets the "Body" part to put the elemnts in it
const bodyDiv = document.getElementById('body')
bodyDiv.appendChild(menu())
 


const aboutButton = document.getElementById('about');
aboutButton.addEventListener("click" , function(e) {

    //here it selecets the "Body" part to put the elemnts in it
const bodyDiv = document.getElementById('body')
bodyDiv.appendChild(menu());

});