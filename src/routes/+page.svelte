<script lang="ts">
    import Log from "../ui/Log.svelte";
    import Header from "../ui/Header.svelte";
    import type { LogType } from "../lib/types.ts";
    import Footer from "../ui/Footer.svelte";
    import Toast from "../ui/Toast.svelte";
    import { browser } from "$app/environment";

    let saveData: any;
    let showToast: boolean = $state(true)
    let videoUrl: any = $state();
    let videoChunks: any = $state([]);
    let messages: LogType[] = $state([]);

    if (browser) {
        if (localStorage.getItem("YourCastMyScreenChoice") as any) {
            showToast = JSON.parse((localStorage.getItem("YourCastMyScreenChoice")) as any).showToast;
        }
    }

    let recordingState = $state({ isRecording: false, isDataAvailable: false, isSaved: false });
    
    function WRITE_LOG(_type: string, _message: string) {
        messages.push({
            id: messages.length,
            type: _type,
            message: `[${new Date().getHours()>9?'':'0'}${new Date().getHours()}:${new Date().getMinutes()>9?'':'0'}${new Date().getMinutes()}:${new Date().getSeconds()>9?'':'0'}${new Date().getSeconds()}] ${_message}`
        });
    }
    
    async function startRecording() {
        try {
            let url;
            let stream = await navigator.mediaDevices.getDisplayMedia({ audio: true, video: true });
            let recorder = new MediaRecorder(stream);

            recorder.start();

            recorder.onstart = function() {
                recordingState.isRecording = true;
                WRITE_LOG("info", "Starting screen record...");
            }

            recorder.onstop = function() {
                recordingState.isRecording = false;
                let blob = new Blob(videoChunks, {type: "video/mp4"});
                videoUrl = window.URL.createObjectURL(blob);
                WRITE_LOG("info", "Ending screen record...");
            }

            recorder.ondataavailable = function(e){
                recordingState.isDataAvailable = true;
                videoChunks.push(e.data);
                saveData = e.data;
            }
        } catch (error: any) {
            WRITE_LOG("error", `Error: ${error.message}`);
        }
    }

async function saveRecording() {
    try {
        var fileHandle = await (window as any).showSaveFilePicker({
            types: [
                {
                    description: "video",
                    accept: {"video/mp4": [".mp4"]}
                }
            ]
        })
                    
        var writable = await fileHandle.createWritable();
        await writable.write(saveData);
        await writable.close();

        WRITE_LOG("info", "creating save data...");
        WRITE_LOG("info", "Save successful.");   

        recordingState.isSaved = true;
    } catch {
        let error = new Error("Action aborted by user");
        WRITE_LOG("error", `Error: ${error.message}`);
    }
}

async function shareRecording() {
    try {
        navigator.share({
            files: videoUrl,
            title: "Sharing Screen Record...",
            text: "I made this screen record with {APP_NAME}",
            url: location.href
        })
    } catch {
        let error = new Error("Share failed");
        WRITE_LOG("error", `Error: ${error.message}`);
    }
}
</script>

<div>
    <Header/>
</div>

<section class="flex items-center justify-around">
    <div class="flex h-[90dvh]">
        <div class="border-1 border-dashed h-[70dvh] w-[70dvw] p-3 m-auto grid place-items-center">
            {#if !recordingState.isDataAvailable}
                <p class="flex flex-col items-center">Screen Record will appear here<br/><br/>
                    <button 
                        disabled={recordingState.isRecording}
                        onclick={() => startRecording()}>{!recordingState.isRecording ? "Start Recording" : "Recording..."}</button>
                </p>
            {/if}

            {#if recordingState.isDataAvailable}
                <div class="w-[100%] p-3">
                    <video src={videoUrl} controls class="m-auto" width="600" height="300">
                        <track kind="captions"/>
                    </video>

                    <ul class="flex w-[80%] justify-evenly items-center m-auto my-3">
                        <li><button onclick={() => saveRecording()}>Save Screen Record</button></li>
                        <li><button onclick={() => shareRecording()}>Share Screen Record</button></li>
                        <li><button onclick={() => {
                            if (recordingState.isDataAvailable && !recordingState.isSaved) {
                                var userChoice = confirm("You are about to take a new screen record and it appears you have not saved the current one. Click OK to discard it and take a new one.");
                                if(!userChoice) return;
                            }
                            
                            videoUrl = undefined;
                            videoChunks = [];
                            recordingState.isDataAvailable = false;
                            startRecording();
                        }}>Take New Screen Record</button></li>
                    </ul>
                </div>
            {/if}
        </div>
    </div>

    <div id="logs" class="h-[70dvh] w-[25dvw]">
        <Log logArray={messages} onClear={() => messages = []}/>
    </div>

    {#if showToast}
        <Toast
            onClose={() => showToast = false}
            content="This tool does not by any means track users or take or screen recordings without your consent. The code is public and open source, you can view it in the GitHub repo. Thank you for using CastMyScreen"
        />
    {/if}

</section>

<Footer/>

<style>
    li{
        margin: .5rem 0;
    }
</style>