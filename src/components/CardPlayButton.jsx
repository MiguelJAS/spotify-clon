import { Pause,Play } from "./Player"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton ({id}) {

    const {currentMusic, isPlaying, setIsPlaying, setCurrentMusic} = usePlayerStore(state => state)
    const isPlayingPlaylist = isPlaying && currentMusic.playlist.id === id


    function handleClick(){

        if(isPlayingPlaylist){
            setIsPlaying(false)
            return
        }
        fetch(`/src/pages/api/get-info-plalyst.js.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
            const {songs, playlist} = data
            setIsPlaying(true)
            setCurrentMusic({songs, playlist, songs: songs[0]})
        })
    }

    return(
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500">
            {isPlayingPlaylist ? <Pause></Pause> :  <Play></Play>}
        </button>
    )
}