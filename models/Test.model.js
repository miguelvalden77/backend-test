const { Schema, model } = require("mongoose");

const categories = ["Idiomas", "Historia", "Geografía", "Arte", "Ciencia", "Cine", "Matemáticas", "Deportes", "Informática", "Oposiciones", "Literatura", "Otros"]

const OpcionSchema = new Schema({
    texto: { type: String, required: true }
});

const PreguntaSchema = new Schema({
    enunciado: { type: String, required: true },
    opciones: [OpcionSchema],
    CorrectaId: { type: Schema.Types.ObjectId, ref: 'Opcion', required: true }
});

const testSchema = new Schema(
    {
        titulo: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        descripcion: {
            type: String,
            trim: true
        },
        categoria: {
            type: String,
            trim: true,
            required: true,
            enum: categories
        },
        preguntas: [PreguntaSchema]
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const Test = model("Test", testSchema);

module.exports = Test;
