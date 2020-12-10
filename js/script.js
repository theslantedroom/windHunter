
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

    navSingleButton.innerHTML = '<span><i class="fas fa-caret-square-down"></i> <i class="fas fa-wind"></i></span>';
    navSingleButton.addEventListener('click', function(){
        for (i = 0; i < 3; i++) {
            document.getElementsByClassName("navItem")[i].classList.toggle('navSingleButtonOpen');
          }  
    });


    // PICS
     createHTML('div', "picGallery");
     const picGallery = document.getElementsByClassName("picGallery")[0];
     picGallery.innerHTML = '<img src="img/img1.jpg" alt="">';
     

    // Weather
    createHTML('div', "weather");
    const weather = document.getElementsByClassName("weather")[0];
    weather.innerHTML = '<iframe title="Environment Canada Weather" width="287px" height="191px" src="https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-74&amp;lang=e" allowtransparency="true" frameborder="0"></iframe><iframe title="Environment Canada Weather" width="287px" height="191px" src="https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-86&amp;lang=e" allowtransparency="true" frameborder="0"></iframe>';


    createHTML('div', "footer");
}());






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


