<template>
  <div id="nav">
    <!---<p v-if="usuarioLogueado">¡Hola, {{ usuarioLogueado.username }}! (ID: {{ usuarioLogueado.id }}</p> -->
    <p v-if="usuarioLogueado">¡Hola, {{ usuarioLogueado.username }}! (ID: {{ usuarioLogueado.id }})</p>
    <button v-if="usuarioLogueado" @click="logout">Cerrar sesión</button>
    <router-link to="/">Home</router-link> |
    <router-link v-if="usuarioLogueado" to="/posts">My next classes</router-link> |
    <span v-if="isLoggedIn">
      Hola usuario: {{ $store.state.auth.user }}
      <a @click="logout">Logout</a>
    </span>
    <span v-else>
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link> |


    </span>
  </div>
  
</template>
<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "NavBar",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
    ...mapGetters(['usuarioLogueado']),
  },

  methods: {
    ...mapActions(['logout']),
    async cerrarSesion() {
      try {
        // Lógica de logout si es necesario antes de llamar a la acción
        this.logout();
        this.$store.dispatch('logout');
        
        // Utiliza await dentro de un bloque try-catch
        await axios.post('http://localhost:3000/api/logout');
        // va al home
        this.$Router.push('/Home');
        // Otras acciones de logout si es necesario
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    },
  },
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

a:hover {
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
