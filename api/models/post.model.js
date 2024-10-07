import mongoose from 'mongoose';

const postSchema=new mongoose.Schema(
    {
        userId:{
            type:String,
            required: true,
        },
        content:{
            type:String,
            required: true,
        },
        title:{
            type:String,
            required: true,
            unique:true,
        },
        image:{
            type:String,
            default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hostinger.in%2Ftutorials%2Fhow-to-write-a-blog-post&psig=AOvVaw2PcUR1oQK15rwzB90e1Pwb&ust=1728385746691000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiLteaQ_IgDFQAAAAAdAAAAABAE',
        },
        category:{
            type:String,
            default:'uncategorized',
        },
        slug:{
            type:String,
            required:true,
            unique:true,
        },
    },{timestamps:true}
)

const Post= mongoose.model('Post',postSchema);
export default Post;