async function getPokemons() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();
    return data.results;
}

function renderPokemon(pokemon, data) {
    // const markup = `<div class="pokemon-item-container ${data.id}">
    //                     <div class="title-image-container">
    //                         <h2>${pokemon.name}</h2>
    //                         <img src="${data.sprites.front_default}" alt="${pokemon.name} image"></img>
    //                     </div>
    //                     <button class="hide-button" onClick="hidePokemon(${data.id})">Hide me</button>
    //                 </div>`;
    // const list = document.getElementById("list-of-pokemons");
    // list.insertAdjacentHTML('beforeend', markup);

    const section = document.getElementById("list-of-pokemons");
    
    const itemContainer = document.createElement("div");
    
    const titleImageDiv = document.createElement("div");
    const pokeName = document.createElement('h2');
    pokeName.innerText = pokemon.name;

    const imageDiv = document.createElement("div");
    const pokeImg = document.createElement("img");
    pokeImg.src = data.sprites.front_default;
    pokeImg.alt = pokemon.name;
    imageDiv.appendChild(pokeImg);

    const expandContent = document.createElement("div");
    const abilityTitle = document.createElement("h3");
    abilityTitle.innerHTML = "ABILITIES";
    expandContent.appendChild(abilityTitle);
    for(info of data.abilities){
        const p1 = document.createElement("p");
        p1.innerHTML = info.ability.name;
        expandContent.appendChild(p1);
    }
    expandContent.className = "expand-content";
    imageDiv.appendChild(expandContent);

    imageDiv.className = "image-wrapper";

    titleImageDiv.appendChild(pokeName);
    titleImageDiv.appendChild(imageDiv);
    titleImageDiv.className = `title-image-container`;

    const hidePokemonButton = document.createElement("button");
    hidePokemonButton.className = "hide-button";
    hidePokemonButton.onclick = function() {
        hidePokemon(data.id);
    };
    hidePokemonButton.setAttribute("onclick", `hidePokemon(${data.id})`);
    hidePokemonButton.innerHTML = "Hide me";

    itemContainer.appendChild(titleImageDiv);
    itemContainer.appendChild(hidePokemonButton);
    // itemContainer.appendChild(expandContent);
    itemContainer.className = `pokemon-item-container ${data.id}`;

    section.appendChild(itemContainer);

    const hidden1 = JSON.parse(localStorage.getItem('hidden'));
    if(hidden1.includes(data.id)){
        const item = document.getElementsByClassName(`pokemon-item-container ${data.id}`)[0];
        item.hidden = true;
    }
}

async function getPokemonData(url){
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function renderPokemons() {
    const pokemons = await getPokemons();
    await pokemons.forEach(async pokemon => {
        const data = await getPokemonData(pokemon.url);
        renderPokemon(pokemon, data)});
    
}

function hidePokemon(pokemonId) {
    const item = document.getElementsByClassName(`pokemon-item-container ${pokemonId}`)[0];
    item.hidden = true;
    saveHiddenPokemon(pokemonId);
    console.log("Hidden pokemon with id: " + pokemonId);
}

function saveHiddenPokemon(pokemonId){
    
    if(localStorage.getItem('hidden') == null) {
        localStorage.setItem('hidden', '[]');
    }

    let old_hidden = JSON.parse(localStorage.getItem('hidden'));
    old_hidden.push(pokemonId);

    localStorage.setItem('hidden', JSON.stringify(old_hidden));
}

function reviveAllHidden() {
    localStorage.setItem('hidden', '[]');
    location.reload();
}

let counter = 0;
function showOnlyHidden() {
    counter++;
    const hiddenElems = document.getElementsByClassName("pokemon-item-container");
    for(elem of hiddenElems){
        const hideButton = elem.getElementsByClassName("hide-button")[0];
        if(elem.hidden){
            elem.hidden = false;
            if(counter % 2 == 0) {
                hideButton.hidden = false;    
            } else {
                hideButton.hidden = true;
            }
        } else {
            elem.hidden = true;
            hideButton.hidden = false;
        }
    }

    const toggleButton = document.getElementById("toggle-hidden-button-1");
    if(counter % 2 == 0) {
        toggleButton.innerHTML = "Show only hidden";
    } else {
        toggleButton.innerHTML = "Show normal";
    }
}

async function render(){
    await renderPokemons();
}

render();