import * as utils from "./utils/utils"
import * as login from "./utils/login"
import * as openFile from "./utils/openFile"

DZ.init({
    appId  : '394864',
    channelUrl : 'http://nikimusics/channel.html',
    player: {
        container: 'player',
        width : 800,
        height : 100,
        onload : function(){
        }
    }
});

document.getElementById("searchBtn").addEventListener("click", utils.searchTrack);
document.getElementById("addTrack").addEventListener("click", login.showLogInContainer);
document.getElementById("logInBtn").addEventListener("click", openFile.setMusicParam);
document.getElementById("logInBtn").addEventListener("click", ()=>{
    DZ.player.pause();
});
document.getElementById("openDeezerCont").addEventListener("click",()=>{
    document.getElementById("openFileContainer").classList.toggle("hide");
    document.getElementById("deezerApiContainer").classList.toggle("hide");
    openFile.audio.pause();
    document.getElementsByTagName("body")[0].removeEventListener("keydown", openFile.keysControl);
});


