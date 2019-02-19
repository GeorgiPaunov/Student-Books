const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentBookSchema = new Schema({
    title: { type: Schema.Types.String, required: true },
    grade: { type: Schema.Types.Number },
    author: { type: Schema.Types.String },
    publisher: { type: Schema.Types.String, required: true },
    price: { type: Schema.Types.Number, required: true }
});

const StudentBook = mongoose.model("StudentBook", studentBookSchema);

module.exports = StudentBook;
