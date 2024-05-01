import React, { useEffect, useState } from "react";
import { useGetCustomerSatellite } from "../Api/GetCustomerSatellite";
import "../../src/App.css"; // Import CSS file for styling

function IcustomerSatellite() {
  const [customerSatellite, setCustomerSatellite] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const data = await useGetCustomerSatellite();
        setCustomerSatellite(data?.customer_satellites);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    FetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <table className="custom-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Country</th>
            <th>Id</th>
            <th>Launch Date</th>
            <th>Launcher</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {customerSatellite.map((i, ind) => (
            <tr key={ind + 1}>
              <td>{ind + 1}</td>
              <td>{i.country}</td>
              <td>{i.id}</td>
              <td>{i.launch_date}</td>
              <td>{i.launcher}</td>
              <td>{i.mass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IcustomerSatellite;
