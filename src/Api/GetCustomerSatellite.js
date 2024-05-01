
export const  useGetCustomerSatellite = async()=>{
let getCustomerSatellite = await fetch("https://isro.vercel.app/api/customer_satellites")
if(!getCustomerSatellite.ok){
    throw new Error("something went wrong from api")
}
const getCustomerSatelliteData = await getCustomerSatellite.json()
return getCustomerSatelliteData


}

// export const fetchCustomerSatellite = async () => {
//     let response = await fetch("https://isro.vercel.app/api/customer_satellites");
//     if (!response.ok) {
//         throw new Error("Failed to fetch customer satellite data");
//     }
//     return await response.json();
// };