/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navBarMenu = document.querySelector('.navbar__menu');
const navBarList = document.querySelector('#navbar__list');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
// const sections = document.querySelectorAll('.landing__container');
// const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function generateNavItems() {     //this function creates navBarItems depending on how many sections there are.
  const sectionsTitle = document.querySelectorAll('.landing__container h2'); //returns array of h2
  const fragment = document.createDocumentFragment();
  const sections = document.querySelectorAll('section');

  navBarList.innerHTML = '';

  //this line clears navBarList before adding elements to it

  // while (navBarList.firstElementChild){
  //   navBarList.removeChild(navBarList.firstElementChild);
  // } this also works, but above code is lighter

  for (let i = 0; i < sections.length; i++) {

    const navBarItem = document.createElement('li');
    navBarItem.setAttribute('class', 'menu__link');
    navBarItem.innerHTML = `<a href = '#${sections[i].id}'>${sections[i].dataset.nav}</a>`;  //sets id to sections[i].id and sets that equal to href
    fragment.appendChild(navBarItem);

  }

  navBarList.appendChild(fragment);
}

generateNavItems();


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// build the nav


// Add class 'active' to section when near top of viewport
  // section1.getBoundingClientRect().top //returns number of pixels from the top of viewport for section1
  // section1.classList.toggle('your-active-class');  //adds class your-active-class to element and removes if exists
  //need eventlistener that fires on a scroll, that compares the location of element to the top of viewport
  //if the element.top is from 0 to negative section1.getBoundingClientRect().height (above view) then set class = your-active-class
  //if class is your-active-class then display menu item in large band across the top or highlight it in a new color on navbar
//working version below
// document.addEventListener('scroll', function() {
//   const sections = document.querySelectorAll('section');
//   const navBarItems = document.querySelectorAll('.menu__link');
//    //maybe add count to help track what section, then update navBarItems with count
//
//
//    sections.forEach(function(section) {
//
//
//     if (section.getBoundingClientRect().top <= 0 &&
//       section.getBoundingClientRect().top >= section.getBoundingClientRect().height*(-1)) {
//
//         section.classList.add('your-active-class');
//         navBarItems[count].classList.add('active');
//
//
//       } else section.classList.remove('your-active-class');
//               navBarItems[count].classList.remove('active');
//
//           }
//         )
//       }
//     )

//test version

document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navBarItems = document.querySelectorAll('.menu__link');


  let sectionsArray = [];
  sections.forEach(function(section){
    sectionsArray.push(section);
  })


   sectionsArray.forEach(function(section, index) {


    if (section.getBoundingClientRect().top <= navBarList.getBoundingClientRect().height &&
      section.getBoundingClientRect().top >= section.getBoundingClientRect().height*(-1)+navBarList.getBoundingClientRect().height) {

        section.classList.add('your-active-class');
        navBarItems[index].classList.add('active-nav');


      } else {section.classList.remove('your-active-class');
              navBarItems[index].classList.remove('active-nav');
            }
          }
        )
      }
    )


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click
function navClickListener(){
  navBarList.addEventListener('click', function(e){
    console.log(`${e.target}`)
  });
}
navClickListener();


// Set sections as active
