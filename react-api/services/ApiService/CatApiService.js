const apiUrl = 'https://api.thecatapi.com/v1/';

export const getCatImage = async () => {
    try {
        const response = fetch(`${apiUrl}images/search`, { 
            method: 'GET' 
        });

        const data = (await response).json();
        console.log(response);
        return data;

    } catch (err) {
        console.log(err)
    }
}