let currentQuote = "";
let currentAuthor = "";

document.addEventListener("DOMContentLoaded", () => {
  autoDarkMode();
  showDailyQuote();
});

const localQuotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * localQuotes.length);
  const quote = localQuotes[randomIndex];
  currentQuote = quote.text;
  currentAuthor = quote.author;
  displayQuote(currentQuote, currentAuthor);
  saveDailyQuote(currentQuote, currentAuthor);
}

function displayQuote(text, author) {
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  quoteEl.innerHTML = "";
  authorEl.innerHTML = "";

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      quoteEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    } else {
      authorEl.innerText = `— ${author}`;
    }
  }
  typeWriter();
}

function copyQuote() {
  const fullQuote = `"${currentQuote}" — ${currentAuthor}`;
  navigator.clipboard.writeText(fullQuote).then(() => {
    alert("Quote copied to clipboard!");
  });
}

function shareQuote() {
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${currentQuote}" — ${currentAuthor}`
  )}`;
  window.open(tweetURL, "_blank");
}

function saveFavorite() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push({ text: currentQuote, author: currentAuthor });
  localStorage.setItem("favorites", JSON.stringify(favorites));
  alert("Quote saved!");
}

function viewFavorites() {
  const container = document.getElementById("favoritesContainer");
  const list = document.getElementById("favoritesList");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  list.innerHTML = "";
  favorites.forEach(q => {
    const li = document.createElement("li");
    li.textContent = `"${q.text}" — ${q.author}`;
    list.appendChild(li);
  });

  container.classList.toggle("hidden");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function autoDarkMode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
  }
}

function showDailyQuote() {
  const stored = JSON.parse(localStorage.getItem("dailyQuote"));
  const today = new Date().toDateString();

  if (stored && stored.date === today) {
    currentQuote = stored.text;
    currentAuthor = stored.author;
    displayQuote(currentQuote, currentAuthor);
  } else {
    generateQuote();
  }
}

function saveDailyQuote(text, author) {
  const today = new Date().toDateString();
  localStorage.setItem("dailyQuote", JSON.stringify({ text, author, date: today }));
}
