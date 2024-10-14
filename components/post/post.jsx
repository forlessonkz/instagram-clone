import './post.css'

export default function post({post}) {
    return(
        <div className="post">
            <img src={post.image} alt="" />
        </div>
    )
}