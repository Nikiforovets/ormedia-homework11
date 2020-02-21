export function searchTrack(){
    let artistField = document.getElementById("artistField");
    let trackField = document.getElementById("trackField");
    let url = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/search?q=artist:'";
    if(artistField.value != ""){
        url += artistField.value + "'";
    }
    if(trackField.value != ""){
        url += "track:'" + trackField.value + "'";
    }
    getTrackRequest(url);
}

async function getTrackRequest(url){
    try{
        let response = await fetch(url, {method: "GET"});
        let musicData = await response.json();
        console.log(musicData);
        if(typeof musicData.data[0] != "undefined"){
            setMusicToPlaylist(musicData);
            setArtistImage(musicData);
        }
        else{
            alert("По вашему запросу ничего не найдено");
        }
    }
    catch(e){
        console.error(e);
    }
}

function setMusicToPlaylist(musicData){
    for(let i=0; i < 6; i++){
        let track = document.getElementById("track" + i);
        track.innerHTML = "<img src='" + musicData.data[i].album.cover_small +"'></img>";
        track.innerHTML += "<span>" + musicData.data[i].title + " - " +  musicData.data[i].artist.name + "</span>";
        track.addEventListener("click", ()=>{
            DZ.player.playTracks([musicData.data[i].id]);
        })
    }
}

function setArtistImage(musicData){
    document.getElementById("artist").src = musicData.data[0].artist.picture;
}