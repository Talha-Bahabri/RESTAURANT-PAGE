
export default function about () {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('aboutDiv')

     //Combine them in the main div
     mainDiv.appendChild(aboutText());
     mainDiv.appendChild(aboutImgs());
   
    return mainDiv;
  
   }

   function aboutText() {

  
    const aboutDivTextDiv = document.createElement(`div`);
    aboutDivTextDiv.classList.add(`aboutDivTextDiv`);
  
    const aboutPara = document.createElement('p') 
    aboutPara.classList.add(`aboutText`)
    aboutPara.textContent = `By using our latest technology, We developed the ultimate flavor to which YOU,
     for the first time, can experience it.
    by using the best ingredients and best chefs in the world,
     we introduce to you our meals in our special plates, covered in our golden luxurious sauce.`
     //After adding all what we need in the paragraph, we appeand it to the FIRST div
     aboutDivTextDiv.appendChild(aboutPara);
  
     return aboutDivTextDiv;
   }


   function aboutImgs() {
       
     const aboutDivImgDiv = document.createElement(`div`);
     aboutDivImgDiv.classList.add(`aboutDivImgDiv`);
  
  
     const img1 = document.createElement('img');
     img1.classList.add(`aboutImgs`);
     img1.src = "img/about-img1.jpg";
  
     const img2 = document.createElement('img');
     img2.classList.add(`aboutImgs`);
     img2.src = "img/about-img2.jpg";
  
     
     const img3 = document.createElement('img');
     img3.classList.add(`aboutImgs`);
     img3.src = "img/about-img3.jpg";
  
     //After adding the imgs and their attributes, we add them to the SECOND DIV
     aboutDivImgDiv.appendChild(img1);
     aboutDivImgDiv.appendChild(img2);
     aboutDivImgDiv.appendChild(img3);

     return aboutDivImgDiv;
   }
