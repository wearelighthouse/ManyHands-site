const data = {
  platforms: [
    'to-do app',
    'comms platform',
    'task manager',
    'publishing medium',
    'social network',
    'support',
    'dating app',
    'services',
    'banking',
    'HR platform',
    'virtual assistant',
  ],
  audiences: [
    'kids',
    'lawyers',
    'doctors',
    'scuba divers',
    'fitness instructors',
    'jockeys',
    'astronauts',
    'aliens',
    'world leaders',
    'rock stars',
    'celebrities',
    'librarians',
    'artists',
    'secret agencts',
    'crime bosses',
  ],
};

const shuffle = (array) => array.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
const [randomElement1, randomElement2] = document.querySelectorAll('.random');
const innerElement1 = randomElement1.querySelector('.inner');
const innerElement2 = randomElement2.querySelector('.inner');
const params = new URLSearchParams(location.search);

const selectedPlatform = params.get('platform') ?? data.platforms[Math.floor(Math.random() * data.platforms.length)];
const randomisedPlatforms = [...shuffle(data.platforms.filter(a => a !== selectedPlatform)), selectedPlatform];

['&nbsp;', ...randomisedPlatforms, ...randomisedPlatforms].forEach((platform) => {
  const platformElement = document.createElement('div');
  platformElement.innerHTML = platform;
  platformElement.classList.add('invisible');
  innerElement1.appendChild(platformElement);
});

const selectedAudience = params.get('audience') ?? data.audiences[Math.floor(Math.random() * data.audiences.length)];
const randomisedAudiences = [...shuffle(data.audiences.filter(a => a !== selectedAudience)), selectedAudience];

['&nbsp;', ...randomisedAudiences, ...randomisedAudiences].forEach((audience) => {
  const audienceElement = document.createElement('div');
  audienceElement.innerHTML = audience;
  audienceElement.classList.add('invisible');
  innerElement2.appendChild(audienceElement);
});

function runPlatform() {
  setTimeout(() => {
    [...innerElement1.children].forEach(c => c.classList.remove('invisible'));
    innerElement1.style.transform = `translateY(${-2 * (data.platforms.length)}em)`;
    const selectedElement = [...innerElement1.children].find(childElement => childElement.innerText === selectedPlatform);
    selectedElement.style.transition = 'color .2s 3s';
    selectedElement.classList.add('text-mimosa');
  }, 200);
}

function runAudience() {
  setTimeout(() => {
    [...innerElement2.children].forEach(c => c.classList.remove('invisible'));
    innerElement2.style.transform = `translateY(${-2 * data.audiences.length}em)`;
    const selectedElement = [...innerElement2.children].find(childElement => childElement.innerText === selectedAudience);
    selectedElement.style.transition = 'color .2s 3s';
    selectedElement.classList.add('text-mimosa');
  }, 3600);
}

runPlatform();
runAudience();

document.querySelector('.button.reset').addEventListener('click', () => {
  const selectedElement1 = [...innerElement1.children].find(childElement => childElement.innerText === selectedPlatform);
  const selectedElement2 = [...innerElement2.children].find(childElement => childElement.innerText === selectedAudience);
  innerElement1.style.transform = '';
  innerElement2.style.transform = '';
  selectedElement1.style.transition = 'color .2s';
  selectedElement2.style.transition = 'color .2s';
  selectedElement1.classList.remove('text-mimosa');
  selectedElement2.classList.remove('text-mimosa');
});

document.querySelector('.button.run').addEventListener('click', () => {
  runPlatform();
  runAudience();
});

document.querySelector('.button.overflow').addEventListener('click', () => {
  randomElement1.classList.toggle('overflow-hidden');
  innerElement1.classList.toggle('text-smoke');
  randomElement2.classList.toggle('overflow-hidden');
  innerElement2.classList.toggle('text-smoke');
});
