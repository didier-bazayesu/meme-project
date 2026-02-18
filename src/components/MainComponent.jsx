import MordorMeme from "./MemeImage"
import { useState } from "react"



export default function Main() {
    let[input1, setinput1] = useState('');
    let [input2, setinput2] = useState('');
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

   //handling input 1
    function handleInput1 (event){
          setMeme(prev=>({
            ...prev,
              topText:event.target.value

          }))
    }

    //handling inpu2

    function handleInput2(event) {
        setMeme(prev => ({
            ...prev,
            bottomText: event.target.value

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
                            name="topText"
                            value={meme.bottomText}
                            onChange={handleInput2}
                        />
                    </label>
                </div>

            </section>
            <div className="flex ">
                <button className="bg-[#9125b7] text-white mt-10 mx-auto w-xl p-2 rounded-[5px] cursor-pointer ">Get a new meme image 🖼</button>

            </div>

            {/* making  image */}
            <MordorMeme meme={meme}/>
           
        </main>
    )
}