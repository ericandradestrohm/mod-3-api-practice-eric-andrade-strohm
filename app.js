const mainDiv = document.querySelector('.container');
const mainButton = document.querySelector('button');
const newDiv = document.createElement('div');
const catImg = document.createElement('img');
const apiUrl = 'https://api.thecatapi.com/v1/';

newDiv.classList.add('image');
catImg.id = "cat-image";

async function catFetch() {
    fetch(`${apiUrl}images/search`, {
        method: 'get'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
            // Assign image source to cat url
            catImg.src = data[0].url;

            // Append cat image and button to new div
            newDiv.appendChild(catImg);
            mainButton.textContent = 'Click here for another cat!';
            newDiv.appendChild(mainButton);
            
            // Append new div to parent div
            mainDiv.appendChild(newDiv);
        })
        .catch(err => {
            console.log(err);
        })
        .catch(err => {
        console.log(err)
    })
}

mainButton.addEventListener('click', catFetch);