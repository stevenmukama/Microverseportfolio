// const namesarray = ['secondimage', 'imagehovered'];
// const descriptionarray = ['css style', 'js program'];
// const readmore = ['readmore'];

// const dynamic = document.querySelector('.gridcontainer2');
// // eslint-disable-next-line no-plusplus
// for (let i = 0; i < namesarray.length; i++) {
//   const fetch = document.querySelector('.gridcontainer2').innerHTML;
//   const bgimg = document.getElementById(`cards${i}`);
//   dynamic.innerHTML = `<div id="cards${i}" class="boxes">
//   <div class="box-content">
//   <h2>${namesarray[i]}</h2>
//   <p>  ${descriptionarray[i]} </p>
//   <p> <a class="showmore" href="#">${readmore[0]}</a></p>
//   <img ${bgimg} />
//   </div>
//   </div>${(fetch)}`;
//   bgimg.style.backgroundImage = `url('./images/${namesarray[i]}.png)`;
// }

const menuBtn = document.querySelector('.navbarmenu');
const menuItems = document.querySelector('.itemslist');
const listItems = document.querySelectorAll('.listitem');
const navBar = document.querySelector('.navbar');
const navbarIcon = document.querySelector('.navbaricon');
const crossButton = document.querySelectorAll('.btn-line');

let showMenu = false;
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menuItems.classList.add('show');
    navbarIcon.classList.add('show');
    navBar.classList.add('show');
    crossButton.forEach((item) => item.classList.add('show'));

    listItems.forEach((item) => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuItems.classList.remove('show');
    navbarIcon.classList.remove('show');
    navBar.classList.remove('show');
    crossButton.forEach((item) => item.classList.remove('show'));
    listItems.forEach((item) => item.classList.remove('show'));

    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);

function closeMenu() {
  menuBtn.classList.remove('close');
  menuItems.classList.remove('show');
  navbarIcon.classList.remove('show');
  navBar.classList.remove('show');
  crossButton.forEach((item) => item.classList.remove('show'));
  listItems.forEach((item) => item.classList.remove('show'));

  showMenu = false;
}

listItems.forEach((item) => item.addEventListener('click', closeMenu));

const projectCard = [
  {
    title: 'Profesional Art Printing Data More',
    popupdescription: 'Multi Post Stories',
    objectdescription: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    languages: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/Snapshootportfolio.png',
    livelink: 'https://stevenmukama.github.io/Microverseportfolio/',
    sourceLink: 'https://github.com/stevenmukama/Microverseportfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    popupdescription: 'Multi Post Stories',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    objectdescription: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    technology: ['html', 'Bootstrap', 'Ruby'],
    languages: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/Snapshootportfolio.png',
    livelink: 'https://stevenmukama.github.io/Microverseportfolio/',
    sourceLink: 'https://github.com/stevenmukama/Microverseportfolio',
  },
  {
    title: 'Website Portfolio',
    popupdescription: 'Multi Post Stories',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    objectdescription: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    languages: ['html', 'Bootstrap', 'Ruby on rails'],
    technology: ['html', 'Bootstrap', 'Ruby'],
    livelink: 'https://stevenmukama.github.io/Microverseportfolio/',
    sourceLink: 'https://github.com/stevenmukama/Microverseportfolio',
  },
  {
    title: 'Profesional Art Printing Data More',
    popupdescription: 'Multi Post Stories',
    technology: ['html', 'Bootstrap', 'Ruby'],
    languages: ['html', 'Bootstrap', 'Ruby on rails'],
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    objectdescription: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    livelink: 'https://stevenmukama.github.io/Microverseportfolio/',
    sourceLink: 'https://github.com/stevenmukama/Microverseportfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    popupdescription: 'Multi Post Stories',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    objectdescription: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    technology: ['html', 'Bootstrap', 'Ruby'],
    languages: ['html', 'Bootstrap', 'Ruby on rails'],
    // image: 'SVG/bgw2.svg',
    livelink: 'https://stevenmukama.github.io/Microverseportfolio/',
    sourceLink: 'https://github.com/stevenmukama/Microverseportfolio',
  },
  {
    title: 'Website Protfolio',
    popupdescription: 'Multi Post Stories',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    objectdescription: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    technology: ['html', 'Bootstrap', 'Ruby'],
    languages: ['html', 'Bootstrap', 'Ruby on rails'],
    // image: 'SVG/w6bgdt.png',
    livelink: 'https://stevenmukama.github.io/Microverseportfolio/',
    sourceLink: 'https://github.com/stevenmukama/Microverseportfolio',
  },
];

const workcards = document.querySelector('.grids');

projectCard.forEach((work, index) => {
  workcards.innerHTML += ` <div id="id${index + 1}" class="cards">
    <div class="carddetail" id="id${index + 1}carddetail">
      <h2><span>${work.title}</span></h2>
      <p>
        ${work.description}
      </p>
      <ul class="cardlist">
        <li class="button1" >${work.technology[0]}</li>
        <li class="button1" >${work.technology[1]}</li>
        <li class="button1" >${work.technology[2]}</li>
      </ul>
    </div>
    <p class="card-liveLink" hidden>${work.livelink}</p>
                <p class="card-sourceLink" hidden>${work.sourceLink}</p>
                <p class="card-image" hidden>${work.image}</p>
    <button class="button cardbtn" id="id${index + 1}button">See Project</button>
  </div>`;
});

const modal = document.querySelector('.modal');

const btn = document.querySelectorAll('.cardbtn');

for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', () => {
    const work = projectCard[i];
    modal.style.display = 'block';

    document.querySelector('.modal-top').innerHTML = `
    <div class="modal-top">
      <span class="project-title">
        <span class="project-title">${work.popupdescription}</span>
      </span>
      `;

    document.querySelector('.modal-info').innerHTML = `
      <div class="project-tools">
         <ul class="cardlist">
        <li class="buttonlist" >${work.languages[0]}</li>
        <li class="buttonlist" >${work.languages[1]}</li>
        <li class="buttonlist" >${work.languages[2]}</li>
      </ul>
      </div>
    </div>
    <div class="modal-bottom" id="modal-bottom">
      <div class="project-img">
        <img src="images/Snapshootportfolio.png" alt=" Image" class="project-img-source">
      </div>
      <div class="project-details">
        <div class="project-desc">
        <p class="project-desc">${work.objectdescription} </p>
        </div>

        <div class="project-links">
          <a href="" id="project-link-1" class="project-link-source">
           See Source
          <img src="/images/github.svg" alt="see-project-icon">
        </a>
        <a href="" id="project-link-1" class="project-link-live">
        See live
       <img src="/images/live.svg" alt="see-project-icon">
     </a>
        </div>
      </div>
    </div>
    `;
  });
}

const span = document.getElementsByClassName('close')[0];

span.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// forma validation

const emailE = document.querySelector('#mail'); // focus on email ID
const form = document.querySelector('.formcontainter'); // focus on the form
const error = document.querySelector('#error'); // focus on area below button to store error messsage

function validator(emailAcquire) {
  if (emailAcquire.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  if (validator(emailE.value)) {
    error.textContent = '';
  } else {
    e.preventDefault();
    emailE.style.border = '3px solid red';
    error.style.display = 'flex';
    error.textContent = 'Error! Please Use Lowercase Email.';
  }
});