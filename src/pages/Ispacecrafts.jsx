import React, { useEffect, useState } from 'react'
import GetSpacecraft from '../Api/GetSpacecraft'

const Ispacecrafts = () => {
  const [spaceCraft, setSpaceCraft] = useState([])
  const [loading, setLoading]= useState(true)
  const [error, setError] = useState(null);

    useEffect(()=>{
async function getData (){
  try {
    setLoading(true)
   const data= await GetSpacecraft()
   setSpaceCraft(data?.spacecrafts)
   setLoading(false)
  } catch (error) {
    setError(error);
        setLoading(false);
  }
}
getData()
    },[])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        {spaceCraft.map((i)=><tr key={i.id}>
          <td>{i.id}</td>
          <td>{i.name}</td>
        </tr>)}
        </tbody>
      </table>
      </div>
  )
}

export default Ispacecrafts