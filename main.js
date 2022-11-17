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
    description: 'A daily selection of privately personalized reads;no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: './images/Snapshootportfolio.png',
    livelink: 'https://stevenmukama.github.io/Microverseportfolio/',
    sourceLink: 'https://github.com/stevenmukama/Microverseportfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: './images/Snapshootportfolio.png',
    livelink: 'https://stevenmukama.github.io/Microverseportfolio/',
    sourceLink: 'https://github.com/stevenmukama/Microverseportfolio',
  },
  {
    title: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: 'SVG/w6bgdt.png',
    livelink: 'https://stevenmukama.github.io/Microverseportfolio/',
    sourceLink: 'https://github.com/stevenmukama/Microverseportfolio',
  },
  {
    title: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: 'SVG/w1w4bg.png',
    livelink: 'https://stevenmukama.github.io/Microverseportfolio/',
    sourceLink: 'https://github.com/stevenmukama/Microverseportfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: 'SVG/bgw2.svg',
    livelink: 'https://stevenmukama.github.io/Microverseportfolio/',
    sourceLink: 'https://github.com/stevenmukama/Microverseportfolio',
  },
  {
    title: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: 'SVG/w6bgdt.png',
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

document.querySelector('.modal-info').innerHTML = `
    <div class="modal-top">
      <div class="project-title">
        <h4 class="project-title">dynamic title</h4>
      </div>
      <div class="project-tools">
        <ul>
        <li>html</li>
        <li>Bootstrap</li>
        <li>Ruby on Rails </li>
        </ul>
      </div>
    </div>
    <div class="modal-bottom" id="modal-bottom">
      <div class="project-img">
        <img src="images/Snapshootportfolio.png" alt=" Image" class="project-img-source">
      </div>
      <div class="project-details">
        <div class="project-desc">
        <p class="project-desc"> dynamic des</p>
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

const modaltitle = document.querySelector('.project-title');
const modalDes = document.querySelector('.project-desc');
const modalLive = document.querySelector('.project-link-source');
const modalSource = document.querySelector('.project-link-source');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.project-img-source');

const cardTitle = document.querySelectorAll('.cardTitle');
const cardDes = document.querySelectorAll('.cardDiscriptionp');
const cardLiveLink = document.querySelector('.card-liveLink');
const cardSourceLink = document.querySelector('.card-sourceLink');
const cardImage = document.querySelectorAll('.card-image');
const btn = document.querySelectorAll('.cardbtn');

for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', () => {
    modal.style.display = 'block';

    modaltitle.textContent = cardTitle[i].innerHTML;
    modalDes.textContent = cardDes[i].innerHTML;
    modalLive.sourceLink = cardLiveLink[i].outerHTML;
    modalSource.sourceLink = cardSourceLink[i].outerHTML;
    modalImage.sourceLink = cardImage[i].outerHTML;
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
