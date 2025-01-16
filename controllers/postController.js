const Post=require("../models/postModel");


exports.createPost= async(req ,res)=>{
   
    try {

        const{title,body}=req.body;

        const post=new Post({
            title,body
        });

        const savePost=await post.save();
        
         
         res.json({
            post:savePost,
         });                   
        
    } catch (error) {
        return res.status(500).json({
            error: "Error while creating Posts",
        })
        
    }
}



exports.getAllPost = async (req, res) => {
  try {
    // Use the correct field names and model references for population
    const posts = await Post.find()
      .populate("comments") // This matches the "comments" field in Post schema
    //   .populate("likes")    // Adjust if the "likes" field exists and is correctly named in your schema
      .exec();

    res.json({
      posts,
    });
  } catch (error) {
    console.error("Error while fetching posts:", error);
    return res.status(500).json({
      error: "Error while fetching posts",
    });
  }
};
