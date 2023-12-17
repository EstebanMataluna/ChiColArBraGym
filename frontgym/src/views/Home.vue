<template>
  <div class="home">
    <div class="card-grid">
      <div v-for="disciplina in disciplinas" :key="disciplina._id" class="card">
        <img :src="`https://res.cloudinary.com/dq4ygehrg/image/upload/v1702822410/replit/ulnvdwz5rkbghvafgc8b.jpg`" class="card-img-top" alt="Imagen de la disciplina">
        <div class="card-body">
          <h5 class="card-title">{{ disciplina.disciplina }}</h5>
          <p class="card-text">{{ disciplina.descripciondiscipl }}</p>
          <p class="card-text">{{ disciplina.profesor }}</p>
          <p class="card-text">{{ disciplina.fecha }}</p>
          <p class="card-text">{{ disciplina.imgurl }}</p>
          <button @click="verDetalle(disciplina)" class="btn btn-primary">Ver detalle</button>
          <button @click="inscribirse(disciplina)" class="btn btn-primary">Inscribirse</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: "Home",
//  data() {
//    return {
//      disciplinas: [] // Almacena las disciplinas obtenidas de la API
//    };
//  },
// Simulación de datos de disciplinas
data() {
  return {
    disciplinas: [
      {
        _id: 1,
        imgurl: "Yoga",
        disciplina: "Yoga",
        descripciondiscipl: "Clase de yoga para principiantes",
        profesor: "Juan Pérez",
        fecha: "2022-10-15"
      },
      {
        _id: 2,
        imgurl: "Pilates",
        disciplina: "Pilates",
        descripciondiscipl: "Entrenamiento de pilates para todos los niveles",
        profesor: "María Gómez",
        fecha: "2022-10-20"
      },
      {
        _id: 3,
        imgurl: "Spinning",
        disciplina: "Spinning",
        descripciondiscipl: "Clase de spinning intensiva",
        profesor: "Carlos Rodríguez",
        fecha: "2022-10-25"
      }
    ]
  };
},
  created() {
    this.obtenerDisciplinas(); // Llama a la función para obtener las disciplinas al cargar el componente
  },
  methods: {
  obtenerDisciplinas() {
    this.disciplinas = [
      {
        _id: 1,
        imgurl: "Yoga",
        disciplina: "Yoga",
        descripciondiscipl: "Clase de yoga para principiantes",
        profesor: "Juan Pérez",
        fecha: "2022-10-15"
      },
      {
        _id: 2,
        imgurl: "Pilates",
        disciplina: "Pilates",
        descripciondiscipl: "Entrenamiento de pilates para todos los niveles",
        profesor: "María Gómez",
        fecha: "2022-10-20"
      },
      {
        _id: 3,
        imgurl: "Spinning",
        disciplina: "Spinning",
        descripciondiscipl: "Clase de spinning intensiva",
        profesor: "Carlos Rodríguez",
        fecha: "2022-10-25"
      }
    ];
  },
  verDetalle() {
    // original: verDetalle(disciplina)

    // Lógica para mostrar los detalles de la disciplina
  },
  inscribirse() {
    // Lógica para inscribirse en la disciplina
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
