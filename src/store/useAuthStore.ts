import { defineStore } from 'pinia'
import type { Pet, PetAdoption, User } from '@/interface/type'
import {
  adoptionList,
  getAllAnimalsForAdoption,
  getToFavorites,
  petProfileView,
  removeToFavorite
} from '@/services/api'
import type { RouteParamValue } from 'vue-router'

export const useAuthStore = defineStore('useAuth',{
  state : () => ({
    user: {} as User,
    pet: [] as Array<Pet>,
    petDetails: {} as Pet,
    favorites_pets: [] as Array<Pet>,
    adoption_list: [] as Array<PetAdoption>
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
    },
    async removeFavorite(id: string): Promise<void> {
      await removeToFavorite(id);
      const pet = await getToFavorites();
      this.favorites_pets = pet.data;
    },
    async listAdoptions() {
      const adopt = await adoptionList();
      this.adoption_list = adopt.data
    }
  },
  getters : {

  }
});
