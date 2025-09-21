<script lang="ts">
    import Heart from "@lucide/svelte/icons/heart";
    import Github from "@lucide/svelte/icons/github";
    import Mail from "@lucide/svelte/icons/mail";
</script>

<footer class="bg-[#ccc9] p-2">
    <div class="flex p-2 justify-between items-center">
        <p>Made with <Heart fill="#f12" strokeWidth="0" class="inline-block"/></p>

        <div>
            <p><button>Privacy Notice</button></p>
            <div class="flex p-2 justify-between items-center">
                Got a bug report, feature suggestion or issue?&nbsp;
                <div class="flex justify-between items-center">
                    <a href="mailto:akintadetemi19@gmail.com" class="block">
                        <Mail class="hover:scale-[1.2] cursor-pointer"/>
                    </a>
                    &nbsp;
                    <a href="https://github.com/Temi-Tade/CastMyScreen">
                        <Github class="hover:scale-[1.2] cursor-pointer"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    div p button {
        color: #12f;
        padding: .25rem;
        background-color: transparent;
    }
</style>