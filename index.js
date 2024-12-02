const VIDEO = document.querySelector("#video");
const RECORD_BTN = document.querySelector("#record button");

async function SCREEN_RECORD(el){
    if ([...document.querySelector("#video").childNodes].map(el => el.toString()).includes("[object HTMLVideoElement]")) {
        var userPrompt = confirm("You are about to take a new screen record while you have not saved the current one. Doing this will  cause the current screen record to be lost. Click Ok to continue.");
        if (userPrompt) {
            WRITE_LOG("info", "overwriting existing screen record...");
        }else{
            return;
        }
    }
    
    WRITE_LOG("info", "initializing screen record...");
    try {
        let stream = await navigator.mediaDevices.getDisplayMedia({
            audio: true,
            video: true,
        });
            
        let chunks = [];
        let recorder = new MediaRecorder(stream);
        let url;
            
        recorder.start();
            
        recorder.onstart = function(){
            WRITE_LOG("info", "Starting screen record...");
            WRITE_LOG("success", "Screen record started...");
            el.disabled = true;
        }
        
        recorder.onstop = function(){
            WRITE_LOG("info", "Ending record stopped");
            WRITE_LOG("success", "Screen record ended");
        
            const videoEl = document.createElement("video");
            videoEl.controls = true;
            
            const blob = new Blob(chunks, {type: "video/mp4"});
            console.log(blob);
        
            WRITE_LOG("info", "resolving stream and creating video...")
            url = window.URL.createObjectURL(blob);
            videoEl.src = url;
            videoEl.width = 850;
            videoEl.height = 450;
        
            VIDEO.innerHTML = "";
            VIDEO.appendChild(videoEl);
            WRITE_LOG("success", "video creation complete")
    
            RECORD_BTN.disabled = false;
        };
        
        recorder.ondataavailable = function(e){
            chunks.push(e.data);
            document.querySelector(".action-btn").style = "display: block";
            document.querySelector(".action-btn").onclick = function(){
                const vidLink = document.createElement("a");
                vidLink.href = url;
                WRITE_LOG("info", "creating download link...");
                vidLink.download = `screen-record_${new Date().toISOString()}.mp4`;
                vidLink.click();
                WRITE_LOG("info", "starting download...");
                document.querySelector("#video").innerHTML = `
                    <div id="placeholder">
                        <p>Your screen record will appear here.</p>
                    </div>
                `
            }
        }
    } catch (error) {
        WRITE_LOG("error", error);
    }
}

