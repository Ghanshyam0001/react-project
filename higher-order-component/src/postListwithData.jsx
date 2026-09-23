import withData from "./HOC/withData";
import PostList from "./postList";
const PostListwithData = withData(PostList,"https://jsonplaceholder.typicode.com/posts")

export default PostListwithData