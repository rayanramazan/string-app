const fetcher = async (url: RequestInfo | URL) => {
    const res = await fetch(url);
    if(!res.ok){
        const msg = "An error occured while fetching data.";
        const info = await res.json();
        const statue = res.status;
        const error = new Error(msg);
        console.error(info, statue);
        throw error;
    }
    return res.json();
}

export default fetcher;