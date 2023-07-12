
window.onload = () => {
  netflix_originals()
  trending_movies()
  top_rated_movies()
}

function top_rated_movies() {
  let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1"
  get_movies_data(url, '#top_rated', 'backdrop_path')
}

function trending_movies() {
  let url = "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045"
  get_movies_data(url, '#trending', 'backdrop_path')
}


function netflix_originals() {
  let url = "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213"
  get_movies_data(url, '.original__movies', 'poster_path')

}

function get_movies_data(url, dom_disp, path) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      else {
        throw new Error('Something Went Wrong')
      }
    }).then(data => {
      display_movies(data, dom_disp, path)
    }).catch(error => {
      console.log(error)
    })
}

display_movies = (movies, dom_disp, path) => {
  var mov_element = document.querySelector(dom_disp)
  for (var movie of movies.results) {
    var mov_image_element = document.createElement('img')
    mov_image_element.setAttribute('movie-id', movie.id)
    mov_image_element.src = `https://image.tmdb.org/t/p/original${movie[path]}`
    mov_element.appendChild(mov_image_element)
  }
}





