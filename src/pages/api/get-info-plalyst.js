import { allPlaylists, songs, songs } from "@/lib/data";

export async function GET({params, request}) {

    /*const {url} = request
    const [, queryString] = url.split("?")
    const searchPrarams = new URLSearchParams(queryString) Otra forma de hacer lo mismo*/
  
    //Siempre 
    const {url} = request
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get('id')

    const playlist = allPlaylists.find(playlist => playlist.id === id) // find te devuelve el primer elemento que cumple dicha condicion
    const songs = allSongs.filter(song => song.albumId === playlist.albumId) // filter te devuelve un nuevo array con los elemetos que cumplen dicha condicion

    return new Response(JSON.stringify({playlist, songs}), {
        headers: { "content-type": "application/json"},
    }) // el primer parametro es la información que queremos devolver y el segundo las cabeceras de respuesta


 


}