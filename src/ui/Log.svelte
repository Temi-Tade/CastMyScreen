<script lang="ts">
    let { logArray, onClear } = $props();
</script>

<div>
    <div class="flex justify-between items-center">
        <h3>Logs</h3>
        <button
            onclick={() => onClear()}
            class='!bg-[transparent] !text-[#26f] !hover:underline'>Clear</button>
    </div>
    <ul>
        {#each logArray as log (log.id)}
            <li>
                <p class="{log.type === "error" ? 'text-red-500' : ''} text-[#fff]">{log.message}</p>
            </li>
        {/each}
    </ul>
</div>

<style>
    li{
        margin: .25rem 0;
    }
</style>