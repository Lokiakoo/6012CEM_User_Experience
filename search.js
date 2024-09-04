const moviesData = {
  type1: [
    {
      imgSrc: "images/poster 12.png",
      name: "movie name 12",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imgSrc: "images/poster 11.png",
      name: "movie name 11",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imgSrc: "images/poster 10.png",
      name: "LUCA",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imgSrc: "images/poster 9.png",
      name: "movie name 9",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imgSrc: "images/poster 8.png",
      name: "movie name 8",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imgSrc: "images/poster 7.png",
      name: "movie name 7",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imgSrc: "images/poster 6.png",
      name: "movie name 6",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imgSrc: "images/poster 5.png",
      name: "movie name 5",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imgSrc: "images/poster 4.png",
      name: "movie name 4",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imgSrc: "images/poster 3.png",
      name: "movie name 3",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imgSrc: "images/poster 2.png",
      name: "movie name 2",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imgSrc: "images/poster 1.png",
      name: "movie name 1",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
  ],
};

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

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");
  const searchTitle = document.getElementById("search-title");
  const cardContainer = document.getElementById("card-container");
  const recommendedMoviesTitle = document.getElementById(
    "recommended-movies-title"
  );

  if (query) {
    searchTitle.innerHTML = `<p>You searched for : <strong style="color: white;">${query}</strong></p>`;

    const searchTerm = query.toLowerCase();

    const filteredMovies = moviesData.type1.filter((movie) => {
      const movieName = movie.name.toLowerCase();

      // Check if every character in searchTerm exists in movieName
      return searchTerm.split("").every((char) => movieName.includes(char));
    });

    if (filteredMovies.length > 0) {
      filteredMovies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.innerHTML = `
                      <div class="card">
                          <img src="${movie.imgSrc}" class="card-img" alt="${movie.name}" />
                          <div class="card-body">
                              <h2 class="name">${movie.name}</h2>
                              <h6 class="des">${movie.description}</h6>
                              <button class="watchlist-btn">Add to Watchlist</button>
                          </div>
                      </div>
                  `;
        cardContainer.appendChild(movieCard);
      });
    } else {
      cardContainer.innerHTML += "<p>No results found</p>";

      const searchResults = document.querySelector(".search-results");
      searchResults.style.flexDirection = "column";

      const recommendedMoviesContainer = document.getElementById(
        "recommended-movies-container"
      );
      recommendedMoviesContainer.style.display = "block";

      recommendedMoviesTitle.innerHTML =
        '<div class="title" style="padding-bottom:20px; padding-left:0%">Recommended movies for you</div>';
      generateMovieCards(moviesData.type1, "recommended-movies");
    }
  } else {
    // Change the CSS of .search-results
    const searchResults = document.querySelector(".search-results");
    searchResults.style.flexDirection = "column";

    const recommendedMoviesContainer = document.getElementById(
      "recommended-movies-container"
    );
    recommendedMoviesContainer.style.display = "block";

    cardContainer.innerHTML = "<p>No search term provided</p>";
    recommendedMoviesTitle.innerHTML =
      '<div class="title" style="padding-bottom:20px; padding-left:0%">Recommended movies for you</div>';
    generateMovieCards(moviesData.type1, "recommended-movies");
  }

  // Handle carousel navigation
  document.querySelector(".pre-btn").addEventListener("click", function () {
    cardContainer.scrollBy({
      left: -200, // Adjust value based on card width
      behavior: "smooth",
    });
  });

  document.querySelector(".nxt-btn").addEventListener("click", function () {
    cardContainer.scrollBy({
      left: 200, // Adjust value based on card width
      behavior: "smooth",
    });
  });
});

document
  .querySelector(".search-box")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("search-form").submit();
    }
  });

function generateMovieCards(movies, containerId) {
  const container = document.getElementById(containerId);
  movies.forEach((movie) => {
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
    container.insertAdjacentHTML("beforeend", card);
  });
}

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
window.onclick = function (event) {
  if (!event.target.matches(".user-icon")) {
    var dropdown = document.getElementById("dropdown-menu");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
};

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