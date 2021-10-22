let movieData;
let recommended=document.getElementById("recommended");
let popular= document.getElementById("popular");
let latest = document.getElementById("new");
const loadData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json');
    xhr.onload = loadThis;
    xhr.send();
}
window.onload = loadData();
function loadThis() {
    movieData = JSON.parse(this.responseText).movies;
    loadMovie();
}
function loadMovie(){
  for(const{movieImg,movieTitle,movieDescription,movieCategory} of movieData){
    if(movieCategory=="Friday releases"){
    container=document.createElement('div');
    container.classList.add("box");
    container.innerHTML=`
            <div class="card">
              <img src="${movieImg}" class="card-img" alt="">
              <div class="card-body">
                <h2 class="name">${movieTitle}</h2>
                <h6 class="des">${movieDescription}</h6>
                <button class="watchlist-btn">add to watchlist</button>
              </div>
            </div>`;
    recommended.appendChild(container);
    }
    else if(movieCategory=="Coming Soon"){
      comingContainer = document.createElement('div');
      comingContainer.classList.add("box");
      comingContainer.innerHTML=`
      <div class="card">
              <img src="${movieImg}" class="card-img" alt="">
              <div class="card-body">
                <h2 class="name">${movieTitle}</h2>
                <h6 class="des">${movieDescription}</h6>
                <button class="watchlist-btn">add to watchlist</button>
              </div>
            </div> `;
      popular.appendChild(comingContainer);
    }
  else if(movieCategory=="Top Rated"){
     topContainer = document.createElement('div');
     topContainer.classList.add("swiper-slide","box");
     topContainer.innerHTML=`
     <div class="card">
              <img src="${movieImg}" class="card-img" alt="">
              <div class="card-body">
                <h2 class="name">${movieTitle}</h2>
                <h6 class="des">${movieDescription}</h6>
                <button class="watchlist-btn">add to watchlist</button>
              </div>
            </div>
     `;
     latest.appendChild(topContainer);
  }
}
}






















