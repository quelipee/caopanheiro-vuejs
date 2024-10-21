import { defineStore } from 'pinia'
import type { Pet, User } from '@/interface/type'
import { getAllAnimalsForAdoption } from '@/services/api'

export const useAuthStore = defineStore('useAuth',{
  state : () => ({
    user: {} as User,
    pet: [] as Array<Pet>,
  }),
  actions : {
    async getAnimalsForAdoption() : Promise<void> {
      const pet = await getAllAnimalsForAdoption();
      this.pet = pet.data;
    }
  },
  getters : {

  }
});
