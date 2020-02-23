import { compileFunction } from "vm";

export let audio =  document.getElementById("audioPlayer");
let files = document.getElementById("openFiles");

export function setMusicParam(){
    files.addEventListener('change', function(){
        audio.src = URL.createObjectURL(this.files[0]); 
     });
     
    audio.addEventListener('canplay', function(){
        let context = new AudioContext();
        let input = context.createMediaElementSource(this);
        input.connect(context.destination);
    });
    
    document.getElementsByTagName("body")[0].addEventListener("keydown", keysControl);
        
}

export function keysControl(event){
    if(event.which == 32 || event.which == 13){
        if(audio.paused == false){
            audio.pause();
        }
        else{
            audio.play();
        }
    }
    if(event.key == "ArrowUp"){
        audio.volume += 0.1;
    }
    if(event.key == "ArrowDown"){
        audio.volume -= 0.1;
    }
    if(event.key == "ArrowRight"){
        audio.currentTime += 1;
    }
    if(event.key == "m"){
        if(audio.volume == 0)
        audio.volume = 1;
        else
        audio.volume = 0;
    }
    if(event.key == "m"){
        if(audio.volume == 0)
        audio.volume = 1;
        else
        audio.volume = 0;
    }
}

