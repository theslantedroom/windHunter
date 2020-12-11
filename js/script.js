
  function createHTML(type, className) {
    const newElement = document.createElement(type);
    newElement.classList.add(className)
    document.body.appendChild(newElement); 
  };

  (function allBuildHTML(){

    // Banner
    createHTML('div', "banner");
    const banner = document.getElementsByClassName("banner")[0];
    banner.innerText = 'Wind Hunter';
    banner.addEventListener('mouseover', function(){
    banner.classList.add('mouseOverBanner');     
    });

    banner.addEventListener('mouseout', function(){
    banner.classList.remove('mouseOverBanner');     
    });
  

    // NAV
    createHTML('nav', "navSingleButton");
    const navSingleButton = document.getElementsByClassName("navSingleButton")[0];

    function createMenuItem(type, className, text) {
        const newElement = document.createElement(type);
        newElement.classList.add(className);
        document.body.appendChild(newElement); 
        newElement.innerText = text;
      };

    createMenuItem('nav', "navItem", 'About');
    createMenuItem('nav', "navItem", 'Photos');
    createMenuItem('nav', "navItem", 'Shop');

    navSingleButton.innerHTML = '<span><i class="fas fa-bars"></i> <i class="fas fa-wind"></i></span>';
    navSingleButton.addEventListener('click', function(){
        for (i = 0; i < 3; i++) {
            document.getElementsByClassName("navItem")[i].classList.toggle('navSingleButtonOpen');
          }  
    });

    // Windy
    createHTML('div', "windy");
    const windy = document.getElementsByClassName("windy")[0];
    windy.id = "windy";
    
    // PICS
     createHTML('div', "picGallery");
     const picGallery = document.getElementsByClassName("picGallery")[0];
     picGallery.innerHTML = `
     <img src="img/img1.jpg" alt="">
     <img src="img/img2.png" alt="">
     <img src="img/img3.png" alt="">
     <img src="img/img4.png" alt="">
     <img src="img/img5.png" alt=""> 
     <img src="img/img6.png" alt="">     
     <p class="gallerytext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde iure a vero rerum officiis harum. Porro nesciunt aliquid deserunt hic, voluptatibus, quibusdam nulla eveniet totam tempora aut, optio iste sequi autem eius cumque consectetur.</p>`;




    // Article
    createHTML('div', "article");

    // Weather
    createHTML('div', "weather");
    const weather = document.getElementsByClassName("weather")[0];
    weather.innerHTML = '<iframe title="Environment Canada Weather" width="287px" height="191px" src="https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-74&amp;lang=e" allowtransparency="true" frameborder="0"></iframe><iframe title="Environment Canada Weather" width="287px" height="191px" src="https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-86&amp;lang=e" allowtransparency="true" frameborder="0"></iframe>';


    createHTML('div', "footer");
}());


// windy






// Create an HTML element Builder
//   function createHTML(type, className) {
//     const newElement = document.createElement(type);
//     newElement.classList.add(className)
//     document.body.appendChild(newElement); 
//   };

//   (function buildHTML(){
//     createHTML('div', "banner");
//   }());


// IFFE - Create a div
// (function createHTML() {
//     const newElement = document.createElement('div');
//     document.body.appendChild(newElement); 
//   }());


