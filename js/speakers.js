const speakers = [
  {
    img: 'assets/1.jpg',
    name: 'Mursal Dawodi',
    job: 'Doctor of Intelligent Systems Enginnering',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
  },
  {
    img: 'assets/4.jpg',
    name: 'Jawid Backtash',
    job: '  Software Engineer and specialist',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
  },
  {
    img: 'assets/3.jpg',
    name: 'M.Arif Payenda',
    job: '  Software Developer and specialist',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
  },
  {
    img: 'assets/1.jpg',
    name: 'Sana',
    job: '    Mobile Application Devloper and specialist',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
  },
  {
    img: 'assets/4.jpg',
    name: 'Wali',
    job: '  Expert of Cisco ',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
  },
  {
    img: 'assets/5.jpg',
    name: 'M.Hussain Sultani',
    job: '    Full-Stack Software Developer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam iste aliquid facilis rerum aut minima nam laborum maxime',
  },
];
// speakers added
speakers.forEach((project) => {
  const container = document.querySelector('.speaker-part');
  const card = document.createElement('article');
  card.classList.add('speakers-main');
  card.innerHTML = `<img src="${project.img}" alt="speaker 1" />
        <div class="speakers-info">
          <h4 class="speakers-name">${project.name}</h4>
          <h5 class="speakers-job">
            ${project.job}
          </h5>
          <hr class="speaker-underline" />
          <p class="speakers-desc">
           ${project.desc}</p>
        </div>`;
  container.appendChild(card);
});
