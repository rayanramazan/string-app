import { useState } from 'react';
import PostList from './post-list';


function PostContainer({ username }: { username: string }) {
    const [cnt, setCnt] = useState(1);

    const pages = [];
    for(let i = 0; i < cnt; i++){
        pages.push(
            <PostList
                index={i}
                username={username}
                key={i}
            />
        )
    }

    return (
        <div>
            {pages}
            <div>
                <button 
                className='bg-slate-900 p-2 text-white rounded-lg'
                onClick={() => setCnt(cnt + 1)}>Load more</button>
            </div>
        </div>
    )
}

export default PostContainer;