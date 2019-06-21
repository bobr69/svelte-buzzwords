<script>
  import { onMount } from "svelte";

  // Import the class
  import BWGenerator from "./BWGenerator.js";

  // Local vars
  let leftWord = "-";
  let rightWord = "-";

  let running = false;

  // Init for the BWGenerator instances
  let bwgLeft = new BWGenerator([
    "Social",
    "Global",
    "Modern",
    "Future",
    "Digital"
  ]);
  let bwgRight = new BWGenerator([
    "Workplace",
    "Collaboration",
    "World",
    "Concepts",
    "Work"
  ]);

  /**
   * Init the first combination on page load
   */
  onMount(() => {
    // onGenerate();
  });

  /**
   * Just a helper method to wait a little while
   */
  async function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  /**
   * Click event method to generate a new combination
   */
  async function onGenerate(times = 10) {
    for (let i = 0; i < 10; i++) {
      leftWord = bwgLeft.getRandomWord();
      rightWord = bwgRight.getRandomWord();

      await wait(100);
    }
  }

  /**
   * Click event method to alter running state an start generating if needed
   */
  function onStartStopPressed() {
    running = !running;
    if (running) {
      generateContinuously();
    }
  }

  /**
   * generate a new combination until stop
   */
  async function generateContinuously(times = 10) {
    while (running) {
      leftWord = bwgLeft.getRandomWord();
      rightWord = bwgRight.getRandomWord();

      await wait(100);
    }
  }
</script>

<style>
  .row {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .col {
    margin-right: 0.8rem;
  }

  .word {
    font-size: 3rem;
  }

  .buzzword {
    height: 4rem;
  }
</style>

<h1 class="row">Buzzword Generator</h1>

<div class="row buzzword">
  <div class="word col">{leftWord}</div>
  <div class="word">{rightWord}</div>
</div>

<div class="row">
  <div class="col">
    <button on:click={() => onGenerate()}>New Buzzword</button>
  </div>
  <div>
    <button on:click={() => onStartStopPressed()}>
       {running ? 'STOP' : 'START'} Buzzword Slot Machine
    </button>
  </div>
</div>
