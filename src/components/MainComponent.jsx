import MordorMeme from "./MemeImage"
import { useEffect, useState } from "react"




export default function MainComponent() {

let[showMeme, setShowMeme] = useState(null);
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    useEffect(()=>{
         fetch("https://api.imgflip.com/get_memes").then(resp=> resp.json())
         .then(data=> console.log(setShowMeme(data.data.memes)));
    },[])



   //handling input 1
    function handleInput1 (event){
       let{name,value}=event.target
        
       setMeme(prev=> ({
        ...prev,
        [name] : value

       }))

         
    }

    //get meme Image
    function getRandomMemeImage(){
        const random = Math.floor(Math.random() * 100)
        const url = showMeme[random].url
        // const image = showMeme.filter((_,i)=> i == random);
        setMeme(prev=> ({
            ...prev,
            imageUrl: url

        }))
    }

   




    return (
        <main>
            <section className="flex justify-center gap-x-36 pt-10 ">
               
               <div className="flex flex-row">
                    <label className="space-y-3">
                        <p>top Text</p>
                        <input
                           className="border-gray-200 border max-w-sm rounded-sm text-center py-2 "
                            type="text"
                            placeholder="One does not simply ..."
                            name="topText"
                            value={meme.topText}
                            onChange={handleInput1}
                        />
                    </label>
               </div>

                <div className="flex flex-row">
                    <label className="space-y-3">
                        <p>Bottom Text</p>
                        <input
                            className="border-gray-200 border max-w-sm rounded-sm text-center py-2 "
                            type="text"
                            placeholder="Walk into monitor ..."
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={handleInput1}
                        />
                    </label>
                </div>

            </section>
            <div className="flex ">
                <button
                 className="bg-[#9125b7] text-white mt-10 mx-auto w-xl p-2 rounded-[5px] cursor-pointer "
                 onClick={getRandomMemeImage}
                >Get a new meme image 🖼
                </button>

            </div>

            {/* making  image */}
            <MordorMeme meme={meme}/>
          
           
        </main>
    )
}