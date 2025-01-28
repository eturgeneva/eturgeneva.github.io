// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-front-end-development/tracks/fscj-22-react-part-i/modules/wdcp-22-jsx-752c2293-9f61-412a-92e2-70ad6e01a0a7/projects/js-react-animal-fun-facts

import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const title = '';
const background = <img className="background" alt="ocean" src="/images/ocean.jpg"/>;

const images = [];
for (let animal in animals) {
  images.push(<img onClick={displayFact} key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button'/>);
};

const showBackground = false;

function displayFact(e) {
  let animalName = e.target.alt;
  let randomIndex = Math.floor(Math.random() * animals[animalName].facts.length);
  let fact = document.getElementById('fact');
  fact.innerHTML = animals[animalName].facts[randomIndex];
  // return animals[animalName].facts[randomIndex];
};

// const animalFacts = (
//   <div>
//     {showBackground && background}
//     <div className='animals'>{images}</div>
//     <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
//     <p id='fact'></p>
//   </div>
//   );
const animalFacts = (
  <div>
    {showBackground && background}
    <div className='animals'>{images}</div>
    <h1>{title || 'Click an animal for a fun fact'}</h1>
    <p id='fact'></p>
  </div>
  );

root.render(animalFacts);