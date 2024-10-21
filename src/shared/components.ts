import { computed, onMounted, ref } from 'vue'
import axios from 'axios';
import AnimalCard from '@/components/mainpage/AnimalCard.vue'
import FormContactComponent from '@/components/mainpage/FormContactComponent.vue'
import { useAuthStore } from '@/store/useAuthStore'
import FooterComponent from '@/components/footer/FooterComponent.vue'
import HeaderComponent from '@/components/headers/HeaderComponent.vue'
import FilterPetComponent from '@/components/mainpage/FilterPetComponent.vue'

export {
  computed,
  FilterPetComponent,
  HeaderComponent,
  FooterComponent,
  useAuthStore,
  ref,
  axios,
  AnimalCard,
  onMounted,
  FormContactComponent,
}
