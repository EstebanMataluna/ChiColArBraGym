<template>
  <div class="home">
    <div class="card-grid">
      <div v-for="disciplina in disciplinas" :key="disciplina._id" class="card">
        <img :src="disciplina.image.secure_url" class="card-img-top" alt="Imagen de la disciplina">
        <div class="card-body">
          <h5 class="card-title">{{ disciplina.disciplina }}</h5>
          <p class="card-text">{{ disciplina.descripciondiscipl }}</p>
          <p class="card-text">{{ disciplina.profesor }}</p>
          <p class="card-text">{{ disciplina.fecha.slice(0, 10) }}</p>
          <p class="card-text">{{ disciplina.hora }}</p>
          <button @click="inscribirse(disciplina)" class="btn btn-primary">Reservar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      disciplinas: [] // Almacena las disciplinas obtenidas de la API
    };
  },
  created() {
    this.obtenerDisciplinas(); // Llama a la función para obtener las disciplinas al cargar el componente
  },
  methods: {
    async obtenerDisciplinas() {
      try {
        // Realiza la solicitud GET a la API para obtener las disciplinas
        const response = await axios.get('http://localhost:3000/api/disciplinas');
        console.log(response.data);
        this.disciplinas = response.data; // Almacena las disciplinas en el array disciplinas
      } catch (error) {
        console.error(error);
      }
    },
    //verDetalle(disciplina) {
      // Lógica para mostrar los detalles de la disciplina
    //},
      inscribirse(disciplina) {
              console.log(disciplina)
      }
  }
};
</script>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>
