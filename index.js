let movies = [
  {
    name: "falcon and the winter soldier",
    des: "Following the events of Avengers: Endgame, Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience.",
    image: "images/slider 2.png",
  },
  {
    name: "loki",
    des: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers Endgame.",
    image: "images/slider 1.png",
  },
  {
    name: "wanda vision",
    des: "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.",
    image: "images/slider 3.png",
  },
  {
    name: "raya and the last dragon",
    des: "Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.",
    image: "images/slider 4.png",
  },
  {
    name: "luca",
    des: "Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. ",
    image: "images/slider 5.png",
  },
];

// carousel
const carousel = document.querySelector(".carousel");
const dotsContainer = document.querySelector(".dots-container");
let sliders = [];
let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let playButton = document.createElement("button");
  let trailerButton = document.createElement("button");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  playButton.appendChild(document.createTextNode("PLAY"));
  trailerButton.appendChild(document.createTextNode("Preview"));
  content.appendChild(h1);
  content.appendChild(p);
  content.appendChild(playButton);
  content.appendChild(trailerButton);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";
  playButton.className = "play-button";
  trailerButton.className = "trailer-button";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }

  updateDots();
};

const createDots = () => {
  dotsContainer.innerHTML = ""; // Clear existing dots
  for (let i = 0; i < movies.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";
    dotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
      showSlide(i);
    });
  }
};

const showSlide = (index) => {
  slideIndex = index;
  carousel.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
};

const updateDots = () => {
  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.className = dot.className.replace(" active", "");
    if (index === slideIndex) {
      dot.className += " active";
    }
  });
};

createDots(); // Create dots initially

for (let i = 0; i < movies.length; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

updateDots();

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });

  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});

// movie data
const moviesData = {
  "type1": [
    { "imgSrc": "images/poster 6.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 5.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 4.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 3.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 2.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 1.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 12.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 11.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 10.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 9.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 8.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 7.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
  ],
  "type2": [
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/244/1280244-v-58d850cbecc4", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3195/1263195-v-b44cc0202665", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3455/1283455-v-6883176a7972", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1901/1231901-v-17c820e1cbe4", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4158/1254158-v-8293462a94f2", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 3.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9317/1269317-v-c851767a526b", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1518/1161518-v-8d86a7ed8500", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4965/1094965-v-185c17cd9ace", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3017/1083017-v-4ab3c2456f2a", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2213/1042213-v-1416e8e25397", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2733/1122733-v-5df3bdae2d7a", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." }
  ],
  "type3": [
    { "imgSrc": "images/poster 1.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 2.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 3.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 4.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 5.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 6.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 7.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 8.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 9.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 10.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 11.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 12.png", "name": "456", "description": "Lorem ipsum dolor sit amet consectetur." }
  ],
  "type4": [
    { "imgSrc": "images/poster 6.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 5.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 4.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 3.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 2.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 1.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 12.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 11.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 10.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 9.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 8.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 7.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
  ],
  "type5": [
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/244/1280244-v-58d850cbecc4", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3195/1263195-v-b44cc0202665", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3455/1283455-v-6883176a7972", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1901/1231901-v-17c820e1cbe4", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4158/1254158-v-8293462a94f2", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 3.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9317/1269317-v-c851767a526b", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1518/1161518-v-8d86a7ed8500", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4965/1094965-v-185c17cd9ace", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3017/1083017-v-4ab3c2456f2a", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2213/1042213-v-1416e8e25397", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2733/1122733-v-5df3bdae2d7a", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." }
  ],
  "type6": [
    { "imgSrc": "images/poster 1.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 2.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 3.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 4.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 5.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 6.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 7.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 8.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 9.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 10.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 11.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." },
    { "imgSrc": "images/poster 12.png", "name": "movie name", "description": "Lorem ipsum dolor sit amet consectetur." }
  ]
};

function generateMovieCards(movies, containerId) {
  const container = document.getElementById(containerId);
  movies.forEach(movie => {
    const card = `
      <div class="card">
        <img src="${movie.imgSrc}" class="card-img" alt="${movie.name}" />
        <div class="card-body">
          <h2 class="name">${movie.name}</h2>
          <h6 class="des">${movie.description}</h6>
          <button class="watchlist-btn">add to watchlist</button>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  generateMovieCards(moviesData.type1, 'div-one-container');
  generateMovieCards(moviesData.type2, 'div-two-container');
  generateMovieCards(moviesData.type3, 'div-three-container');
  generateMovieCards(moviesData.type4, 'div-four-container');
  generateMovieCards(moviesData.type5, 'div-five-container');
  generateMovieCards(moviesData.type6, 'div-six-container');
  generateMovieCards(moviesData.type1, 'div-seven-container');
  generateMovieCards(moviesData.type2, 'div-eight-container');
  generateMovieCards(moviesData.type3, 'div-nine-container');
});

//search box

document.querySelector('.search-box').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('search-form').submit();
  }
});

//dropdown menu

function toggleDropdown(event) {
  event.preventDefault(); // Prevent default link behavior

  var dropdown = document.getElementById("dropdown-menu");

  // Toggle the display of the dropdown menu
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

// Optional: Close dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.user-icon')) {
    var dropdown = document.getElementById("dropdown-menu");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
}

//confirm logout

function confirmLogout() {
  const dialog = document.getElementById("confirm-dialog");
  dialog.style.display = "block";
}

function closeDialog() {
  const dialog = document.getElementById("confirm-dialog");
  dialog.style.display = "none";
}

function logout() {
  window.location.href = "login.html";
}