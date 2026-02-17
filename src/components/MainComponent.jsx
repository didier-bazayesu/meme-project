import MordorMeme from "./MemeImage"



export default function Main() {
 

    return (
        <main>
            <section className="flex justify-center gap-x-36 pt-10 ">
               
               <div className="flex flex-row">
                    <label className="space-y-3">
                        <p>top Text</p>
                        <input
                           className="border-gray-200 border max-w-sm rounded-sm text-center py-0.5 "
                            type="text"
                            placeholder="One does not simply ..."
                            name="topText"
                        />
                    </label>
               </div>

                <div className="flex flex-row">
                    <label className="space-y-3">
                        <p>Bottom Text</p>
                        <input
                            className="border-gray-200 border max-w-sm rounded-sm text-center py-0.5 "
                            type="text"
                            placeholder="Walk into monitor ..."
                            name="topText"
                        />
                    </label>
                </div>

            </section>
            <div className="flex ">
                <button className="bg-[#9125b7] text-white mt-10 mx-auto w-xl p-2 rounded-[5px] cursor-pointer ">Get a new meme image 🖼</button>

            </div>

            {/* making  image */}
            <MordorMeme/>
           
        </main>
    )
}