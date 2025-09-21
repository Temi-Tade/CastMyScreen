<script lang="ts">
    let { content, onClose } = $props();

    import { browser } from "$app/environment";
    import GitHub from "@lucide/svelte/icons/github";
</script>

<div class="bg-[#cde] fixed right-2 bottom-2 p-2 left-[100dvh] shadow-md rounded-[.6rem]">
    <div>
        <h3 class="font-bold text-xl">Privacy Notice</h3>

        <p class="p-1">{content}</p>
        
        <div>
            <a href="https://github.com/Temi-Tade/CastMyScreen">
                <GitHub class="hover:scale-[1.2] cursor-pointer"/>
            </a>
        </div>
        <div class="flex justify-between items-center">
            <label class="cursor-pointer">
                <input
                    type="checkbox"
                    oninput={(e:any) => {
                        if (browser) {
                            (localStorage.setItem("YourCastMyScreenChoice", JSON.stringify({
                                showToast: false
                            }))) as any
                        }
                    }}
                    class="cursor-pointer">
                Do not show again
            </label>


            <button onclick={() => onClose()}>Ok, Got It</button>
        </div>
    </div>
</div>