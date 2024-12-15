const dogShoutout = document.querySelector('.dog-container');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showDogShoutout () {
  dogShoutout.innerHTML = `
    <h3 class="quote">shoutout to dog</h3>
    <img src="/images/dog.jpg" alt="" class="dog-picture">
  `
}

function hideDogShoutout () {
  dogShoutout.innerHTML = ``;
}

await sleep(3000)

showDogShoutout()

await sleep(1000)

hideDogShoutout()

await sleep(3000)

showDogShoutout()

await sleep(1000)

hideDogShoutout()