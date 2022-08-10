import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

async function loadData() {
    const dogs = await getDogs();

    for (let dog of dogs) {
        const dogContainer = renderDogCard(dog);

        dogListContainer.append(dogContainer);
    }
}
loadData();    
