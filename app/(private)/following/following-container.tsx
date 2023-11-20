import { useState } from "react";
import FollowingList from "./following-list";

function FollowingContainer() {
    const [cnt, setCnt] = useState(1);
    
    const pages = [];
    for(let i = 0; i < cnt; i++) {
        pages.push(<FollowingList index={i} />);
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

export default FollowingContainer;