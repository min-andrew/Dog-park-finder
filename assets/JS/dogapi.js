const apiUrl = 'https://dog.ceo/api/breeds/image/random/3';
const ceoDogElement = document.querySelector ('.random-dogs');

async function getCeoDog() {
    const response =await fetch(apiUrl);
    const json =await response.json();
    console.log(json.message);

}

getCeoDog();