<script>
  let skills = [
    {
      id: 1,
      name: "HTML"
    },
    {
      id: 2,
      name: "CSS"
    },
    {
      id: 3,
      name: "Javascript"
    }
  ];
</script>

<div class="Skills">
  <h3>Skills</h3>
  <ul>
    {#each skills as { name }, index}
      <li key={index}>{name}</li>
    {/each}
  </ul>
</div>

<style>
  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }
</style>
