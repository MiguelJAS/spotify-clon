import { usePlayerStore } from "@/store/playerStore"
import { useEffect, useRef, useState } from "react"

export const Pause = () => (
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-pause" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
</svg>
)

export const Play = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M10 18l6 -6l-6 -6v12" />
  </svg>
)



export function Player() {
    
    const {isPlaying, setIsPlaying} = usePlayerStore(state => state)
    const [currentSong, setCurrentSong] = useState(null)
    const audioRef = useRef()

    useEffect(() => {
        audioRef.current.src = `/public/music/Flo Rida - Right Round (Lyrics)_EI-4f3yUq5U.mp3`
    }, [])

    function handleClick(){
        if(isPlaying){
            audioRef.current.pause()
        }else{
            audioRef.current.play()
            audioRef.current.volume = 0.2
        }

        setIsPlaying(!isPlaying)
    }

    const stateButton = isPlaying ? <Pause></Pause> : <Play></Play>

    return(
        <>
           <div className=" flex flex-row justify-between w-full px-4 z-50">
            <div>Current song</div>
            <div className=" gird place-content-center gap-4">
                <div className="flex justify-center">
                <button className=" text-red-500 font-bold bg-green-500 rounded-full p-2" onClick={handleClick}>{stateButton}</button>
                </div>
            </div>

            <div>Volumen</div>
            <audio ref={audioRef}></audio>
        </div></>
     
    )
}

