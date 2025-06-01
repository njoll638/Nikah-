
function openInvitation() {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('main').style.display = 'block';
  document.getElementById('musik').play();
}

function kirimUcapan() {
  const input = document.getElementById('ucapanInput');
  const ucapan = input.value;
  if (ucapan.trim()) {
    const div = document.createElement('div');
    div.textContent = ucapan;
    document.getElementById('ucapanList').appendChild(div);
    input.value = '';
  }
}

// Countdown logic
const countDownDate = new Date("June 19, 2025 00:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = days + " Hari " + hours + " Jam " + minutes + " Menit " + seconds + " Detik ";
}, 1000);
