import Post from '../post/post'
import './posts.css'
import POSTSDB from '@/db/postDb'
export default function posts() {
    return(
        <div className="posts">
            <div className="post-list-header">
                <div className='active'>
                    <a href="">публикации</a>
                </div> 
                <div><a href="">отметки</a></div>
            </div>
            <div className="post-list">
                {POSTSDB.map(post => 
                    <Post key={post.id} post = {post}/>
                )}
            </div>
            
        </div>
    )
}

