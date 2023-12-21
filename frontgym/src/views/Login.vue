<template>
  <div class="login">
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="email">Email:</label>
          <input type="text" name="email" v-model="form.email" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="form.password" />
        </div>
        <button type="submit">Submit</button>
      </form>

      <p v-if="showError" id="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from 'axios';

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError: false,
      
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("email", this.form.email);
      User.append("password", this.form.password);
      try {
          const response = await axios.post('http://localhost:3000/api/login', this.form);
          console.log(response.status); // Imprimir la respuesta del servidor en la consola
          this.showError = false;
          this.$store.dispatch('loginExitoso', response.data);
          this.$router.push("/posts");
          // Después de un inicio de sesión exitoso
          const userId = response.data.id;  
const nombreDeUsuario = response.data.usename;
          this.$store.commit('setUserData', { id: userId, name: nombreDeUsuario });
          
        } catch (error) {
          this.showError = true;
          console.log(error.response.data);
          if (error.response && error.response.status === 400) 
          {
            // Acceder al mensaje de error devuelto por la API
            const errorMessage = error.response.data.message;

            // Mostrar el mensaje de error al usuario
            this.errorMessage = errorMessage;
          } 
          else {
            // Manejo de otros errores
            this.errorMessage = 'Error sin especificar';
          }
        }
    }
}
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}

#error {
  color: red;
}
</style>
