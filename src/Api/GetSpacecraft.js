
const GetSpacecraft = async()=>{
    const res = await fetch ("https://isro.vercel.app/api/spacecrafts")
    if(!res.ok){
        throw new Error("problem getting response")
    }
    const data = await res.json()
    return data
}
export default GetSpacecraft