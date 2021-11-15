// URL to Game of Thrones API to fetch all characters
/* let url = 'https://thronesapi.com/api/v2/Characters';

fetch(url); */
/* const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'; */
//const url = 'https://anapioficeandfire.com/api/books/';
let url = 'https://thronesapi.com/api/v2/Characters';

const app = document.querySelector('.characters');
const loading = document.querySelector('#loading');

const addResultToDom = (item) => {

    //console.log(item);

    let card = document.createElement('div');
    card.classList.add('card-class');
    card.classList.add('figure');
    card.style.verticalAlign = 'top';

    let image = document.createElement('img');
    image.classList.add('image-class');
    image.setAttribute('src', item.imageUrl);
    image.setAttribute('alt', 'item-image');
    card.appendChild(image);


    let fullName = document.createElement('h4');
    fullName.classList.add('name-class');
    fullName.textContent = item.fullName;
    card.appendChild(fullName);

    let title = document.createElement('p');
    title.classList.add('title-class');
    title.textContent = item.title;
    card.appendChild(title);

    app.appendChild(card);
}


const fetchData = (url) => {

    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        //console.log(data);
        data.forEach((result)=>{
            //console.log(result)
            addResultToDom(result);
        });


    })
    .catch((error) => {
        console.log(error);
        let element = document.createElement('div');
        element.textContent = 'An error occured. Please try again.';
        app.append(element);
    })

    .finally(()=>{
    });

};

fetchData(url);

