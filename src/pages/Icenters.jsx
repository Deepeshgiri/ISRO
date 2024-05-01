import React, { useEffect, useState } from 'react'
import useGetCenters from '../Api/GetCenter'

const Icenters = () => {
  const [centers , setCenters] = useState([])
  useEffect(()=>{
const GetCenter = async()=>{
  const data = await useGetCenters()
  setCenters(data?.centres)
  
}
GetCenter()
  },[])

  return (
    <div>
      <table className='custom-table'>
        <thead>
          <th>S.No</th>
          <th>Name</th>
          <th>State</th>
          <th>Place</th>
        </thead>
        <tbody>
          {centers.map((i)=><tr key={i.id}>
            <td>{i.id}</td>
            <td>{i.name}</td>
            <td>{i.State}</td>
            <td>{i.Place}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Icenters