<template>
  <div class="container">
    <p>Aquí irán todas las clases en las que me he inscripto</p>
      <p>Hi {{ $store.state.auth.user }}</p>
      <div>
      <h1>Clases Inscritas</h1>
      <ul>
        <li v-for="clase in clases" :key="clase._id">
          <div class="clase-item">
            <p>{{ clase.clase }} - {{ clase.descripcion }} - Profesor: {{ clase.profesor }} - Día: {{ formatDate(clase.dia) }} - Hora: {{ clase.hs }}</p>
            <button @click="eliminarClase(clase._id)">Eliminar</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import axios from 'axios';
export default {
  data() {
    return {
      clases: [],
    };
  },
  mounted() {
    // Llamada a la API al montar el componente
    this.fetchClases();
  },
  methods: {
    async fetchClases() {
      try {
        const response = await axios.get('http://localhost:3000/api/tasks'); // mi API
        this.clases = response.data;
      } catch (error) {
        console.error('Error al obtener las clases:', error);
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('es-AR', options);
    },
    async eliminarClase(id) {
      try {
        await this.$axios.delete(`http://localhost:3000/api/tasks/${id}`); //  API para borrar la clase
        // Vuelve a cargar las clases después de eliminar
        this.fetchClases();
      } catch (error) {
        console.error('Error al eliminar la clase:', error);
      }
    },
  },
};
</script>





<!-- import { mapGetters, mapActions } from "vuex";

//export default {
//  name: "Posts",
//  components: {},
//  data() {
//    return {
//      form: {
//        title: "",
//        write_up: "",
//      },
//    };
//  },
//  created: function() {
    // a function to call getposts action
//    this.GetPosts()
//  },
//  computed: {
//    ...mapGetters({ Posts: "StatePosts", User: "StateUser" }),
//  },
//  methods: {
//    ...mapActions(["CreatePost", "GetPosts"]),
//    async submit() {
//      try {
//        await this.CreatePost(this.form);
//      } catch (error) {
//        throw "Sorry you can't make a post now!"
//      }
//    },
//  },
//};   -->

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
  margin: 10px;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

input {
  width: 60%;
  margin: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}

textarea {
  width: 75%;
  resize: vertical;
  padding: 15px;
  border-radius: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  height: 150px;
  margin: 15px;
}

ul {
  list-style: none;
}

#post-div {
  border: 3px solid #000;
  width: 500px;
  margin: auto;
  margin-bottom: 5px;
}
</style>
