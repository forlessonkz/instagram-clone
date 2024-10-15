import Link from 'next/link'
import './post.css'

export default function post({post}) {
    return(
        <div className="post">
            <Link href=''> 
                {/* <img src={post.image} alt="" />       */}
            </Link>
            <div>
                <img src="/images/icons/notifications.png" alt="" />
                <span>{post.like}</span>
                <img src="/images/icons/comments.png" alt="" />
                <span>{post.comments}</span>
            </div>
        </div>
    )
}