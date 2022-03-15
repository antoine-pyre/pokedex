import { createRouter, createWebHistory } from 'vue-router';
import PokemonsList from '../views/PokemonsList.vue';
import PokemonPage from '../views/PokemonPage.vue';

const routes = [
  {
    path: '/',
    name: 'pokedex',
    component: PokemonsList
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon_page',
    component: PokemonPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;