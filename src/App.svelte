<script lang="ts">
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<main>
  <h1>Welcome to Evergreen.io</h1>
  <button on:click={increment}>
    Count is {count}
  </button>
  <p>Edit <code>src/App.svelte</code> to get started.</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background-color: #ff3e00;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #ff5a00;
  }

  code {
    background-color: #f4f4f4;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
  }
</style>