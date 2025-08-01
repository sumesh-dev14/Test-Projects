const ratings = document.querySelectorAll('.rating');
const panel = document.getElementById('panel');
const sendBtn = document.getElementById('send');

let selectedRating = '';

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    removeActiveClasses();
    rating.classList.add('active');
    selectedRating = rating.querySelector('.words').innerText;
  });
});

sendBtn.addEventListener('click', () => {
  if (selectedRating) {
    panel.innerHTML = `
      <strong class="heading-text">Thank you for your feedback! 🙌</strong>
      <p style="margin-top: 20px;">You rated us: <strong>${selectedRating}</strong></p>
    `;
  } else {
    alert('Please select a feedback option before sending.');
  }
});

function removeActiveClasses() {
  ratings.forEach((rating) => rating.classList.remove('active'));
}
