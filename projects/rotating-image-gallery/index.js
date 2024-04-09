const imageDetails = [
  {
    url: "https://picsum.photos/id/91/367/267",
    description: "Description 1"
  },
  {
    url: "https://picsum.photos/id/96/367/267",
    description: "Description 2"
  },
  {
    url: "https://picsum.photos/id/88/367/267",
    description: "Description 3"
  },
  {
    url: "https://picsum.photos/id/90/367/267",
    description: "Description 4"
  },
  {
    url: "https://picsum.photos/id/88/367/267",
    description: "Description 5"
  },
  {
    url: "https://picsum.photos/id/58/367/267",
    description: "Description 6"
  },
  {
    url: "https://picsum.photos/id/55/367/267",
    description: "Description 7"
  },
  {
    url: "https://picsum.photos/id/48/367/267",
    description: "Description 8"
  }
];

const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  const imagesHTML = imageDetails.map((detail, index) => `
    <span style="--i: ${index + 1}">
      <div class="image-wrapper">
        <img src="${detail.url}" />
        <div class="description">${detail.description}</div>
      </div>
    </span>
  `).join("");

  imageContainerEl.innerHTML = imagesHTML;
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();
