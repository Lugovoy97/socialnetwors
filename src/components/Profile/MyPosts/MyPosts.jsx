import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div className="">
                    <textarea></textarea>
                </div>
                <div className="newpostbutton">
                    <button>New post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='0' />
                <Post message='Its my first post' likesCount='21' />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;