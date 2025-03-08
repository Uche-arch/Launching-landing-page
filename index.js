let countDownDate = new Date("Oct 16, 2025 00:00:00").getTime();
let content = document.getElementById("content");
function padding(value) {
  return String(value).padStart(2, 0); // This line of code ensures that the minutes and seconds value are always padded with a zero if the nuber is less than two
}
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = padding(days);
  document.getElementById("hours").innerHTML = padding(hours);
  document.getElementById("minutes").innerHTML = padding(minutes);
  document.getElementById("seconds").innerHTML = padding(seconds);

  if (distance < 0) {
    // clearInterval(x);
    document.getElementById("launch-info").innerHTML = 'We had <span>UNEXPECTED</span> problems';
  }
}, 1000);



