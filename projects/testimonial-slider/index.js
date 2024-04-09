const testimonials = [
  {
    name: "Marcus Lee",
    photoUrl:
      "https://img.freepik.com/free-photo/smiling-man-with-arms-crossed_1149-1711.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712188800&semt=ais",
    text: "While the idea behind the service is promising, my experience was underwhelming. The recommendations felt generic, and the customer support was less responsive than I had hoped for. It has potential but needs improvement.",
    rating: 1,
  },
  {
    name: "Sofia Alvarez",
    photoUrl:
      "https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc=",
    text: "The level of personalization and attention to detail in their travel recommendations is phenomenal. Each journey planned using their insights has been a unique and unforgettable experience. Truly a top-notch service for travelers.",
    rating: 4,
  },
  {
    name: "Raj Patel",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "This platform changed my travel planning game! The hidden gems and detailed guides provided have made every trip unforgettable. The attention to detail in their recommendations is unmatched. A game-changer for explorers at heart!",
    rating: 5,
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text, rating } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;

  const ratingEl = document.querySelector('.rating');
  ratingEl.innerHTML = '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

function nextTestimonial() {
  idx++;
  if (idx >= testimonials.length) {
    idx = 0;
  }
  updateTestimonial();
}

function prevTestimonial() {
  idx--;
  if (idx < 0) {
    idx = testimonials.length - 1;
  }
  updateTestimonial();
}
