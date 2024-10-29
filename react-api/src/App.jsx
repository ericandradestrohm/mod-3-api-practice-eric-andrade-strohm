import { useState } from 'react';
import { getCatImage } from '../services/ApiService/CatApiService.js';
import './App.css';

function App() {
  const [buttonText, setButtonText] = useState('Click here to see a cat!');
  const [imageSrc, setImageSrc] = useState('');

  const fetchImage = async () => {
    try {
      const data = await getCatImage();
      setImageSrc(data[0].url);
    } catch (err) {
      console.error("Can't fetch image", err)
    }
  }

  const buttonClick = () => {
    fetchImage();
    setButtonText("Click again to see another!")
  };

  return (
    <>
      <div className="image">
        {/* render image if it exists */}
        {imageSrc && <img src={imageSrc} id="cat-image"/>}
        <button id="cat-button" onClick={buttonClick}>{buttonText}</button>
      </div>
    </>
  );
}

export default App;
