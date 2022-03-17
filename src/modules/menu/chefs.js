
export default function chefs() {

    const mainDiv = document.createElement('div');
     mainDiv.classList.add(`chefsDiv`)
  
     mainDiv.appendChild(chef1())
     mainDiv.appendChild(chef2())
     mainDiv.appendChild(chef3()) 
     return mainDiv;
     
  }

  function chef1() {
    const div1 = document.createElement('div');
    div1.classList.add('chefSingleDiv')

     const chefPar1 = document.createElement('p');
     chefPar1.textContent = `Our Mewost amazing chef , CATchip`;
     chefPar1.classList.add(`chefsText`)
   
     const chefImg1 = document.createElement('img');
     chefImg1.classList.add(`chefImgs`)
     chefImg1.src = "img/chef-img1.jpg"
   
     div1.appendChild(chefImg1)
     div1.appendChild(chefPar1)

    return div1;

  }

  function chef2() {
    const div2 = document.createElement('div');
    div2.classList.add('chefSingleDiv')

     const chefPar2 = document.createElement('p');
     chefPar2.textContent = `Our Mewost amazing chef , CATchip`;
     chefPar2.classList.add(`chefsText`)
   
     const chefImg2 = document.createElement('img');
     chefImg2.classList.add(`chefImgs`)
     chefImg2.src = "img/chef-img2.jpg"
   
     div2.appendChild(chefImg2)
     div2.appendChild(chefPar2)

    return div2;

  }

  function chef3() {
    const div3 = document.createElement('div');
    div3.classList.add('chefSingleDiv')

     const chefPar3 = document.createElement('p');
     chefPar3.textContent = `Our Mewost amazing chef , CATchip`;
     chefPar3.classList.add(`chefsText`)
   
     const chefImg3 = document.createElement('img');
     chefImg3.classList.add(`chefImgs`)
     chefImg3.src = "img/chef-img3.jpg"
   
     div3.appendChild(chefImg3)
     div3.appendChild(chefPar3)

    return div3;

  }

