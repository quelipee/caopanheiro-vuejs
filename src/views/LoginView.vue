
<template class="bg-white">
  <div class="flex min-h-screen">
    <!-- Left Section (Image/Illustration) -->
    <div class="w-1/2 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative"
    style="background-image: url('https://images-americanas.b2w.io/produtos/5503364455/imagens/papel-de-parede-adesivo-desenho-de-animais-coloridos-15m/5503364455_1_large.jpg')">
      <p class="absolute bottom-4 left-4 text-white text-sm font-semibold">@nguyenhut</p>
    </div>

    <!-- Right Section (Login Form) -->
    <div class="w-1/2 flex items-center justify-center">
      <div class="max-w-md w-full px-8 py-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Sign In to Pet Adoption</h2>

        <button class="w-full flex items-center justify-center bg-gray-900 text-white py-2 rounded-md shadow-md hover:bg-gray-800 transition">
          <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" class="w-6 h-6 mr-2" alt="Google Logo" />
          Sign in with Google
        </button>

        <div class="flex items-center my-4">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="mx-2 text-gray-400">or sign in with email</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>

        <form action="" method="post" @submit.prevent="checkForm">
          <input
            v-model="user.email"
            type="email"
            placeholder="Example@gmail.com"
            class="w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <input
            v-model="user.password"
            type="password"
            placeholder="******"
            class="w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <div class="mb-3" v-if="errorLogin">
            <p class="text-red-400 text-sm text-center">{{errorLogin}}</p>
          </div>
          <button class="w-full flex items-center justify-center bg-gray-900 text-white py-2 rounded-md shadow-md hover:bg-gray-800 transition">
            Sign In
          </button>
        </form>

        <p class="text-sm text-gray-500 mt-3">
          Don't have an account? <a href="#" class="text-purple-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import type { User } from '@/interface/type'
  import { ref } from '@/shared/components'
  import { signInAuthenticated } from '@/services/api'

  const user = ref<User>({
    email : '',
    password: ''
  });
  const errorLogin = ref(null);
  const clearError = () =>{
    errorLogin.value = null;
  };
  const checkForm = async () => {
    await signInAuthenticated(user.value).then((responseData) => {
      console.log(responseData);
    }).catch((err) => {
      errorLogin.value = err.response.data.message;
      setTimeout(() =>{
        clearError();
      },5000)
    });
  }
</script>

