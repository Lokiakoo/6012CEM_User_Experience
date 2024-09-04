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