import React from 'react';

export default function Meme() {

    const [meme, setMeme]=React.useState({
        topText: "",
        bottomText: "",
        imageURL: "https://i.imgflip.com/30b1gx.jpg"
    });

    const [allMemesImage , setMemeImages]=React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then( res => res.json())
        .then( info => {
            setMemeImages(info.data.memes)
        })
    },[])

    function getNewImage() {
        let index= Math.floor(Math.random()*100)
        let newURL = allMemesImage[index].url
        setMeme( memes => {
            return {...memes,imageURL:newURL}
        });
    }

    function changeText(e){
      let newval=e.target.value
      let name=e.target.name
        setMeme( memes => {
            return {
                ...memes,
                [name]: newval
            }
        })
    }
    return(
        <div>
        <div className="form">
            <input type="text" placeholder='top text' onChange={changeText} name="topText"></input>
            <input type="text" placeholder='bottom text' onChange={changeText} name="bottomText"></input>
            <button type="input"
                    className="button"
                    onClick={getNewImage}>Get new Meme Image</button>
        </div>
        <img src={meme.imageURL} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    )
}