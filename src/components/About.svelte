<script>
  // Logica
  let someText = `Frontend Developer at Platzi`;
  let count = 0;

  function handleClick() {
    count = count + 1;
  }
</script>

<div class="About">
  <p>{someText}</p>
  <h1>{count === 0 ? "Haz click abajo!" : count}</h1>
  <button on:click={handleClick}>Click</button>
</div>

<style>
  p {
    color: var(--theme-color);
    font-size: 21px;
  }
</style>
