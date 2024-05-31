import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Base64ImageConverter from '../components/Base64ImageConverter.vue';
import TextEncoderDecoder from '../components/TextEncoderDecoder.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/base64-image-converter', name: 'Base64ImageConverter', component: Base64ImageConverter },
  { path: '/text-encoder-decoder', name: 'TextEncoderDecoder', component: TextEncoderDecoder },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;