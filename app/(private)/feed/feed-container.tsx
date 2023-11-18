import { useState } from "react";
import FeedList from "./feed-list";

function FeedContainer() {
    const [cnt, setCnt] = useState(1);

    const pages = [];
    for(let i = 0; i< cnt; i++) {
        pages.push(<FeedList index={i} key={i} />);
    }

    return (
        <div className="flex justify-center flex-col items-center">
            {pages}
            <div className=" bg-slate-900 w-fit py-2 px-4 rounded text-white">
                <button onClick={() => setCnt(cnt + 1)}>Load more</button>
            </div>
        </div>
    )
}

export default FeedContainer;