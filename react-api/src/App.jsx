import { useState, useEffect } from 'react';
import { getCatImage, getMultipleCatImages } from '../services/ApiService/CatApiService';
import './App.css';

function App() {
    const [buttonText, setButtonText] = useState('Click here to see a cat!');
    const [multipleButtonText, setMultipleButtonText] = useState('Fetch Multiple Cat Images');
    const [imageSrc, setImageSrc] = useState('');
    const [allImages, setAllImages] = useState([]);
    const [workerMessage, setWorkerMessage] = useState('Currently meowing');

    const fetchImage = async () => {
        try {
            const data = await getCatImage();
            setImageSrc(data[0].url);
        } catch (err) {
            console.error("Can't fetch image", err);
        }
    };

    const fetchMultipleImages = async () => {
        try {
            const urls = await getMultipleCatImages();
            setAllImages(urls);
            setMultipleButtonText("Click again to see more cats!");
        } catch (err) {
            console.error("Can't fetch multiple images", err);
        }
    };

    const buttonClick = () => {
        fetchImage();
        setButtonText("Click again to see another!");
    };

    useEffect(() => {
        const worker = new Worker(new URL('../workers/catWorker.js', import.meta.url));
        worker.postMessage('start');
        worker.onmessage = (event) => setWorkerMessage(event.data);
        return () => worker.terminate();
    }, []);

    return (
        <div className="container">
            <div className="solo-image">
                {imageSrc && <img src={imageSrc} className="single-cat-image" alt="Random Cat" />}
                <button id="single-cat-button" onClick={buttonClick}>{buttonText}</button>
            </div>
            <div className="multiple-images">
              <button id="multiple-cat-button" onClick={fetchMultipleImages}>{multipleButtonText}</button>
              <div className="image-row">
                  {allImages.map((url, index) => (
                      <img key={index} src={url} alt={`Cat ${index + 1}`} className="cat-image" />
                  ))}
              </div>
            </div>
            <p>Message from worker:</p>
            <p>{workerMessage}</p>
        </div>
    );
}

export default App;
