const mongoose=require("mongoose");

const likeSchema= new mongoose.Schema({
     post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // This should match the name of the Post model
        required: true,
      },
      user: {
        type: String, // Change this if you are referencing a User model
        required: true,
      }
     

})

module.exports=mongoose.model("Like",likeSchema);