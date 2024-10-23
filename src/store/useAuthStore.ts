import { defineStore } from 'pinia'
import type { Pet, User } from '@/interface/type'
import { getAllAnimalsForAdoption, getToFavorites } from '@/services/api'

export const useAuthStore = defineStore('useAuth',{
  state : () => ({
    user: {} as User,
    pet: [] as Array<Pet>,
    favorites_pets: [] as Array<Pet>,
  }),
  actions : {
    async getAnimalsForAdoption() : Promise<void> {
      const pet = await getAllAnimalsForAdoption();
      this.pet = pet.data;
    },
    async getToFavoritesUserAuth() {
      const pet = await getToFavorites();
      this.favorites_pets = pet.data;
    }
  },
  getters : {

  }
});
