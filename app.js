
const root = document.getElementById('root');
const apiUrl = '';

async function fetcher() {
    fetch(`${apiUrl}`, {
        method: 'GET'
    }).then(response => {
        //console.log(response);
        response.json().then(data => {
            //console.log(data);
            
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err)
    })
}