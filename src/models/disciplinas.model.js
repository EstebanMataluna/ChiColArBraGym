
import mongoose from 'mongoose';

const disciplinaSchema = new mongoose.Schema({
    disciplina: String,
    descripciondiscpl: String,
    profesor: String,
    fecha: Date,
    hora: String,
    image: {
      secure_url: String,
      public_id: String
    }
  });

  export default mongoose.model('Products', disciplinaSchema);

