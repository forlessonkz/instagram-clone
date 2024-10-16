import Link from 'next/link'
import './post.css'

export default function post({post}) {
    return(
        <Link href='' className="post">
            <div className='post-img'> 
                <img src={post.image} alt="" />      
            </div>
            <div className='hover-container'>
                <div className='hover-effect'>
                    <img className='' src="/images/icons/notifications.png" alt="" />
                    <span>{post.like}</span>
                    <img src="/images/icons/comments.png" alt="" />
                    <span>{post.comments}</span>
                </div>
            </div>
        </Link>
    )
}