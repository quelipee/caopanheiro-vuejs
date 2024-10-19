import { defineStore } from 'pinia'
import type { User } from '@/interface/type'

export const useAuthStore = defineStore('useAuth',{
  state : () => ({
    user : {} as User
  }),
  actions : {

  },
  getters : {

  }
});
