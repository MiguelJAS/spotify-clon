import { useState } from "react"

const Pause = () => (
    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" ><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)

const Play = () => (
    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)

export function Player() {
    
    const [isPlaying, setIsPlaying] = useState(false)

    function handleButton(){
        setIsPlaying(!isPlaying)
    }

    const stateButton = isPlaying ? <Pause></Pause> : <Play></Play>

    return(
        <>
           <div className=" flex flex-row justify-between w-full px-4 z-50">
            <div>Current song</div>
            <div className=" gird place-content-center gap-4">
                <div className="flex justify-center">
                <button className=" text-red-500 font-bold bg-white rounded-full p-2" onClick={handleButton}>{stateButton}</button>
                </div>
            </div>

            <div>Volumen</div>
        </div></>
     
    )
}