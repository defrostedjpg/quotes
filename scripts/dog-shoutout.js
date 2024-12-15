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

await sleep(2000)

showDogShoutout()

await sleep(500)

hideDogShoutout()

await sleep(2500)

showDogShoutout()

await sleep(500)

hideDogShoutout()

await sleep(2500)

showDogShoutout()

await sleep(750)

hideDogShoutout()

await sleep(100)

showDogShoutout()

await sleep(100)

hideDogShoutout()

await sleep(100)

showDogShoutout()

await sleep(100)

hideDogShoutout()

await sleep(7000)

showDogShoutout()