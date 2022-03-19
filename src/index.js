import _ from 'lodash';
import  menu  from './modules/menu/food'
import  about  from './modules/menu/about'
import  chefs  from './modules/menu/chefs'

    //here it selecets the "Body" part to put the elemnts in it
const bodyDiv = document.getElementById('body')


bodyDiv.appendChild(about());

const aboutButton = document.getElementById('about');
aboutButton.addEventListener("click" , function(e) {
  removePage()
  console.log('about presssssessss')
 
bodyDiv.appendChild(about());

});

const menuButton = document.getElementById('menu');
menuButton.addEventListener("click" , function(e) {
  removePage()
 bodyDiv.appendChild(menu());

});
 

const chefsButton = document.getElementById('chefs');
chefsButton.addEventListener("click" , function(e) {
  removePage()
 bodyDiv.appendChild(chefs());

});

 function removePage() {
  while(bodyDiv.lastChild) {
    bodyDiv.lastChild.remove();
  }
 }