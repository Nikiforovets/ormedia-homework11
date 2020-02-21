export function setMusicParam(){
    let audio =  document.getElementById("audioPlayer");
    let files = document.getElementById("openFiles");

    files.addEventListener('change', function(){
        audio.src = URL.createObjectURL(this.files[0]); 
     });
     
    audio.addEventListener('canplay', function(){
        this.play();
        let context = new AudioContext();
        let input = context.createMediaElementSource(this);
        input.connect(context.destination);
    });
    
}
 

