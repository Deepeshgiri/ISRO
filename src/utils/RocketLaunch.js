import React, { useEffect, useState } from "react";
import "./Rocket.css"; // Import CSS file for styling
import AllLaunches from "../Api/AllLaunches";

function Rocket() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const getLaunches = async () => {
      try {
        const data = await AllLaunches();
        if (!data) {
          throw new Error("Unable to fetch data");
        }
        setLaunches(data);
      } catch (error) {
        console.log(error);
      }
    };
    getLaunches();
  }, []);

  return (
    <div >
      <table className="custom-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Launch Date</th>
            <th>Launch Vehicle</th>
            <th>Orbit Type</th>
            <th>Application</th>
            <th>Mission Status</th>
            <th>Link</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {launches.map((launch, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{launch?.name}</td>
              <td>{launch?.launchDate}</td>
              <td>{launch?.launchVehicle}</td>
              <td>{launch?.orbitType}</td>
              <td>{launch?.application}</td>
              <td>{launch?.missionStatus}</td>
              {/* Render link if available */}
              <td>
                {launch.link ? (
                  <a href={launch.link} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td>{launch?.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rocket;
