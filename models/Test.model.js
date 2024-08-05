const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case

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
        preguntas: [PreguntaSchema]
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const Test = model("Test", testSchema);

module.exports = Test;
