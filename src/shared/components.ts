import { computed, onMounted, ref } from 'vue'
import axios from 'axios';
import AnimalCard from '@/components/mainpage/AnimalCard.vue'
import FormContactComponent from '@/components/mainpage/FormContactComponent.vue'
import { useAuthStore } from '@/store/useAuthStore'
import FooterComponent from '@/components/footer/FooterComponent.vue'
import HeaderComponent from '@/components/headers/HeaderComponent.vue'
import FilterPetComponent from '@/components/mainpage/FilterPetComponent.vue'
import { useRouter } from 'vue-router'
import AnimalDetailsView from '@/views/AnimalDetailsView.vue'
import InformationComponent from '@/components/petProfile/InformationComponent.vue'
import AdoptionButtonsComponent from '@/components/petProfile/AdoptionButtonsComponent.vue'

export {
  AdoptionButtonsComponent,
  InformationComponent,
  AnimalDetailsView,
  useRouter,
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
