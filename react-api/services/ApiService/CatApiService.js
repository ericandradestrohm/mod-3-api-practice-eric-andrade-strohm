const apiUrl = 'https://api.thecatapi.com/v1/';


// Fetch to grab any cat
export const getCatImage = async () => {
    try {
        const response = await Promise.any([
            fetch(`${apiUrl}images/search`, { method: 'GET' }),
            fetch(`${apiUrl}images/search`, { method: 'GET' })
        ]);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error fetching cat image:", err);
    }
};

// Fetch to grab 3 cats
export const getMultipleCatImages = async () => {
    try {
        const responses = await Promise.all([
            fetch(`${apiUrl}images/search`, { method: 'GET' }),
            fetch(`${apiUrl}images/search`, { method: 'GET' }),
            fetch(`${apiUrl}images/search`, { method: 'GET' })
        ]);
        const dataPromises = responses.map(response => response.json());
        const data = await Promise.all(dataPromises);
        return data.map(item => item[0].url);
    } catch (err) {
        console.error("Error fetching multiple cat images:", err);
    }
};
