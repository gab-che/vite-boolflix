import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    apiKey: '09dc0f7da6892386bc87edd5bc10ae54',
    movies: [],
    series: [],
    searchInput: '',
});

export function fetchMovies() {
    axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            api_key: store.apiKey,
            language: 'it-IT',
            query: store.searchInput,
        }
    })
        .then((resp) => {
            console.log(resp.data.results)
            store.movies = resp.data.results
        })
        .catch((error) => {
            //console.log(error);
        })
}

export function fetchSeries() {
    axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
            api_key: store.apiKey,
            language: 'it-IT',
            query: store.searchInput,
        }
    })
        .then((resp) => {
            console.log(resp.data.results)
            store.series = resp.data.results
        })
}