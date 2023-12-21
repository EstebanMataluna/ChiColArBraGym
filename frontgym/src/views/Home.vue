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
          <p class="card-text">{{ disciplina._id }}</p>
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
    async inscribirse(disciplina) {
      try {
        const usuarioLogueado = this.$store.getters.usuarioLogueado;
        const tarea = {
          clase: disciplina.disciplina,
          descripcion: disciplina.descripciondiscpl,
          profesor: disciplina.profesor,
          dia: disciplina.fecha,
          hs: disciplina.hora,
          user: usuarioLogueado.id // Aquí agregamos el ID del usuario logueado
        };

        // Realizamos la solicitud POST a la API para crear la tarea
        const response = await axios.post('http://localhost:3000/api/tasks', tarea);
        
        // Manejo de la respuesta si es necesario
        
        console.log('Tarea creada:', response.data);
      } catch (error) {
        console.error('Error al inscribirse:', error);
      }
    },
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
