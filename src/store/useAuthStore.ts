import { defineStore } from 'pinia'
import type { Pet, User } from '@/interface/type'
import { getAllAnimalsForAdoption, getToFavorites, petProfileView } from '@/services/api'
import type { RouteParamValue } from 'vue-router'

export const useAuthStore = defineStore('useAuth',{
  state : () => ({
    user: {} as User,
    pet: [] as Array<Pet>,
    petDetails: {} as Pet,
    favorites_pets: [] as Array<Pet>,
  }),
  actions : {
    async getAnimalsForAdoption(): Promise<void> {
      const pet = await getAllAnimalsForAdoption();
      this.pet = pet.data;
    },
    async getToFavoritesUserAuth(): Promise<void> {
      const pet = await getToFavorites();
      this.favorites_pets = pet.data;
    },
    async getPetDetails(id: string | RouteParamValue[]): Promise<void> {
      const pet = await petProfileView(id);
      this.petDetails = pet.data;
    }
  },
  getters : {

  }
});
