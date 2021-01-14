<script>
  // Logica
  let someText = `Frontend Developer at Platzi`;
  let count = 0;

  let styles = { darkMode: false };

  function handleClick() {
    count = count + 1;
  }

  function toggle() {
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<div class="About">
  {#if !styles.darkMode}
    <p>{someText}</p>
  {:else}
    <p>Hello Dark Mode</p>
  {/if}

  <h1>{count === 0 ? "Haz click abajo!" : count}</h1>
  <button on:click={handleClick}>Click</button>
  <button on:click={toggle}>Dark Mode: {styles.darkMode ? "on" : "off"}</button>
</div>

<style>
  p {
    color: var(--theme-color);
    font-size: 21px;
  }
</style>
