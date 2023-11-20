import { useState } from "react";
import FollowersList from "./followers-list";

function FollowersContainer() {
    const [cnt, setCnt] = useState(1);
    
    const pages = [];
    for(let i = 0; i < cnt; i++) {
        pages.push(<FollowersList index={i} />);
    }

    return (
        <div>
            {pages}
            <div className="flex justify-center mt-2">
                <button 
                    onClick={() => setCnt( cnt + 1)}
                    className="bg-slate-900 p-2 rounded-lg text-white"
                    >Load More</button>
            </div>
        </div>
    )
}

export default FollowersContainer;