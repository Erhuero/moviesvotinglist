const API_TOKEN = "8bb12f2bc5be12fc79ef1c460f3b25ae";

//appel de l'api et de retourner un film en fonction d un texte rechere
export function getFilmsFromApiWithSearchedText(text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url).then((response) => response.json()).catch((error) => console.log(error))
}

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}
