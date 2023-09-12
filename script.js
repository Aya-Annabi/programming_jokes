const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

const jokes = [
  "Things aren’t always #000000 and #FFFFFF",
  "Programmer: An organism that turns coffee into software",
  "There’s no place like 127.0.0.1",
  "If at first you don’t succeed, call it version 1.0",
  "My love for you has no bugs",
  "Real programmers count from 0",
  "My mind is like an internet browser, 19 tabs open, 3 of them are frozen, ads popping up everywhere, I have no idea where the music is coming from",
  "Computers will neverl fully replace humans until they learn to laugh at the boss’s jokes",
  "When in doubt // it out",
  "Algorithm: words used by programmers when they don’t want to explain what they did",
  "An optimist says: ‘ The Glass if Half-Full.’ A pessimist says: ‘The Glass if Half-Empty.’ A programmer says: ‘The Glass is Twice as Large as Necessary’",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code",
  "Why did the developer use a credit card to buy all the gifts? Becuase he had cleared all his cache",
  "What did the Java Code say to the C code? You’ve got no class",
  "Why do programmers prefer dark mode? Because light attracts bugs"
  // Add more jokes here
];

let currentJokeIndex = 0;

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

function generateJoke() {
  // Get the joke at the current index
  const selectedJoke = jokes[currentJokeIndex];

  // Update the joke element with the selected joke
  jokeEl.innerHTML = selectedJoke;

  // Move to the next joke or cycle back to the start if at the end
  currentJokeIndex = (currentJokeIndex + 1) % jokes.length;
}
