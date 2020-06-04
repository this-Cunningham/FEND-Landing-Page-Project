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
const main = document.querySelector('main');

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
    navBarItem.setAttribute('class', `menu__link`);
    navBarItem.innerHTML = `<a data-scroll = section${[i+1]} href = '#${sections[i].id}'>${sections[i].dataset.nav}</a>`;  //sets id to sections[i].id and sets that equal to href
    fragment.appendChild(navBarItem);

  }

  navBarList.appendChild(fragment);
}


// Scroll to section on link click
//when i click on the element in the navbar I want to scroll to the cooresponding element down the page
function navClickListener(){
  const navBarList = document.querySelector('#navbar__list');

  navBarList.addEventListener('click', function(e){ //this code here is a pain in my ass...
//there has got to be a less absurd way to scroll to element down page using href but modifying scroll characteristics (location of element after scroll etc)
//the code below- i basically added a data-scroll attribute to each <li>'s anchor tag <a data-scroll = section[i+1] (in navBar generator code)
//then i used this string which gets returned from e.target.dataset.scroll and snuck it into document.querySelector while searching for id with that value
//this is only way i could think to link each section to navbar item so that i could customize the scrolling behavior
//since the href anchor tag automatically scrolls elements so the top border matches top of viewport...is there a way to just customize default anchor scroll behavior?
    let scrollTarget = undefined;
    e.preventDefault();
    if (e.target.nodeName === 'A') {

      scrollTarget = document.querySelector(`#${e.target.dataset.scroll}`);
      scrollTarget.scrollIntoView({behavior: 'smooth', block: 'end'});
    }
    //get the text content of whatever is clicked 'section1' = variable
    //then have that go into #
  })
}



//Create New Section Function
function newSectionCreator(){
  const section = document.createElement('section');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');


}

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


generateNavItems();
navClickListener();
//data-scroll = section[i+1]


const createSection = (content) => {
  const sections = document.querySelectorAll('section');
  const newSection = document.createElement('section');

  newSection.setAttribute('id', `section${sections.length+1}`);
  newSection.setAttribute('data-nav', `Section ${sections.length+1}`);
  newSection.innerHTML = sectionStructurer(sections.length+1, content);

  return newSection;
}


const sectionStructurer = (sectionNumber, text) => {

  return `<div class = "landing__container">
          <h2>Section ${sectionNumber}</h2>
          <p>${text}</p>
          <p></p>
          </div>
          </section>`
}

const addSection = (content) => {
  main.appendChild(createSection(content));
  generateNavItems();
}

document.getElementById('generateSection').addEventListener('click', function(e, content){
  addSection(content);

})

// Set sections as active
