const Post=require("../models/postModel");
const Like = require("../models/likeModel");

exports.createLike= async(req ,res)=>{
   
    try {

        const{post,user}=req.body;

        const like=new  Like({
            post,user,
        });

        const saveLike=await like.save();

        const updatedPost=await Post.findByIdAndUpdate(post, {$push:{likes:saveLike._id}}, {new:true})
                          .populate("likes")
                          .exec();
         
         res.json({
            post:updatedPost,
         });                   
        
    } catch (error) {
        return res.status(500).json({
            error: "Error while creating Like",
        })
        
    }
}


exports.unLike = async (req, res) => {
    try {
        const { post, like } = req.body;

        // Find and delete the like entry
        const unlike = await Like.findOneAndDelete({
            post: post,
            _id: like,
        });

        if (!unlike) {
            return res.status(404).json({
                error: "Like not found",
            });
        }

        // Update the post to remove the like reference
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $pull: { likes: unlike._id } },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({
                error: "Post not found",
            });
        }

        res.json({
            post: updatedPost,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error while disliking the post",
        });
    }
};
