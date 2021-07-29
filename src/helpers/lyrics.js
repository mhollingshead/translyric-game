import axios from "axios";

export function getLyrics(artist, title) {
    return axios.get(`https://api.vagalume.com.br/search.php?art=${artist}&mus=${title}&extra=relart&apikey=8ae936b91f65a1f7b5ffd12f2e1b188f`)
}

export function translateLyrics(text, lang1, lang2) {
    return axios.post(`https://translate.astian.org/translate`, {q: text, source: lang1, target: lang2});
}