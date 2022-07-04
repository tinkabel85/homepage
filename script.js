const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const dreamjob = document.querySelector(".dreamjob");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline_format h5");

const futureDate = new Date(2022, 9, 1, 09, 30);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

dreamjob.textContent = `JobOffer by ${weekday}, ${date} ${month} ${year}  ${hours}:${minutes}am`;

/* time in mlsec */
const futureTime = futureDate.getTime();

function getDifference() {
  const today = new Date().getTime();
  const t = futureTime - today;
  /* ms in one day, hour, min */
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="
      expired ">The time is now!</h4>`;
  }
}
// countdown
let countdown = setInterval(getDifference, 1000);
getDifference();

