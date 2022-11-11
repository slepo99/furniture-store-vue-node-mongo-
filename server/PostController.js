import Post from "./Post.js"
import PostService from "./PostService.js"
class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture)
            res.json(post)
            
            } catch (e) {
                res.status(500).json(e)
            }
            
    }
    async getAll(req, res) {
        try {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
            res.setHeader('Access-Control-Allow-Credentials', true); // If needed
            const posts = await PostService.getAll();
            return res.json(posts);
            
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}
export default new PostController()