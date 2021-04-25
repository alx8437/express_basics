import Post from "./Post.js";

class PostService {
    async create(post) {
        const {author, title, content, picture} = post
        const createdPost =  await Post.create({author, title, content, picture})
        return createdPost
    }

    async getAll() {
        const posts = await Post.find();
        console.log(posts)
        return posts
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id не был указан')
        }
        const post = await Post.findById(id)
        return post
    }

    async update(post) {
        if (!post._id) {
            throw new Error('id не был указан')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost
    }

    async delete(id) {
        if (!id) {
            throw new Error('id не был указан')
        }
        const deletedPost = await Post.findByIdAndDelete(id)
        return deletedPost
    }
}


export default new PostService();