
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 416;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 35;
    valueDisplay.textContent = startValue;
    if (startValue >= endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// document.addEventListener('DOMContentLoaded', (event) => {
//   const rocket = document.querySelector('.rocket');

//   rocket.addEventListener('click', () => {
//     rocket.classList.add('moved');
//   });
// });

document.addEventListener('DOMContentLoaded', (event) => {
  const rocket = document.querySelector('.rocket');
  const smokeImage = document.querySelector('.subdiv .smoke');

  rocket.addEventListener('click', () => {
    rocket.classList.add('moved');
    smokeImage.classList.add('fade-out');
  });
});


