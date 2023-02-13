import "./posts.scss"
import Post from "../Post/Post";

const Posts = () => {
    const posts = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic: "https://ucarecdn.com/7de78bac-7e1c-4404-a57f-a34a9e1c7070/-/crop/3485x3491/0,105/-/preview/-/progressive/yes/-/format/auto/",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img: "https://ucarecdn.com/7de78bac-7e1c-4404-a57f-a34a9e1c7070/-/crop/3485x3491/0,105/-/preview/-/progressive/yes/-/format/auto/",
        },
        {
            id: 2,
            name: "Jane Doe",
            userId: 1,
            profilePic: "https://ucarecdn.com/7de78bac-7e1c-4404-a57f-a34a9e1c7070/-/crop/3485x3491/0,105/-/preview/-/progressive/yes/-/format/auto/",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
    ];

    return (
        <>
            <div className="posts-container">
                <div className="post-form">
                    <form action="">
                        <textarea type="text" name="" id="" placeholder="Enter a post.." />
                        <button>Share</button>
                    </form>
                </div>
                <div>
                    {posts.map(post=>(
                        <Post post={post} key={post.id} />
                    ))}
                </div>
            </div>
        </>
)
        
}

export default Posts