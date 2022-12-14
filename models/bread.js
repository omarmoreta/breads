const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: "/images/default.jpg" },
  baker: {
    type: Schema.Types.ObjectID,
    ref: "Baker",
  },
});

//Helper method
breadSchema.methods.getBakedBy = function () {
  return `${this.name} was baked with love by ${
    this.baker.name
  }, who has been with us since ${this.baker.startDate.getFullYear()}`;
};

//Model
const Bread = mongoose.model("Bread", breadSchema);

module.exports = Bread;
