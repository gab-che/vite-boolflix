import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    api_key: '09dc0f7da6892386bc87edd5bc10ae54',
    movies: [],
    series: [],
    search_input: 'ritorno',
});

export function fetchMovies() {
    axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            api_key: store.api_key,
            language: 'it-IT',
            query: store.search_input,
        }
    })
        .then((resp) => {
            console.log(resp.data.results)
        })
}