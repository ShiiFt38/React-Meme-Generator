import memesData from "../memesData";
import React, {useState } from "react"

export default function Meme(){
    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData); 

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMemeImage(prevMeme => (
            {
                ...prevMeme,
                [name]:value
            }
        ))
        console.log(memeImage)
    }


    return(
        <main>
            <div className="form">
                <input 
                    type='text' 
                    className="form--input" 
                    placeholder=" Top text"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleChange}/>
                <input 
                    type='text' 
                    className="form--input" 
                    placeholder=" Bottom text"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleChange}/>

                <button 
                    className="form--button" 
                    onClick={getMemeImage}>
                        Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={memeImage.randomImage} alt="Meme" className="meme--image"/>
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}