const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3
  },
  url: {
    type: String,
    required: true,
    minlength: 8
  },
  author: String,
  likes: Number
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("Blog", blogSchema);
