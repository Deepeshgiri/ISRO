const useGetCenters = async()=>{
    const res = await fetch("https://isro.vercel.app/api/centres")
    if(!res.ok){
        throw new Error ("problem getting response from server")
    }
    const data = await res.json()
    return data
}

export default useGetCenters