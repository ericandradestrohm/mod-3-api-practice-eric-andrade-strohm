const apiUrl = 'https://api.thecatapi.com/v1/';

async function catFetch() {
    fetch(`${apiUrl}images/search`, {
        method: 'get'
    }).then(response => {
        console.log(response);
        response.json().then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err)
    })
}
