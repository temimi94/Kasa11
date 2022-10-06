import { useEffect, useState } from "react";
import LocationCard from "../components/LocationCard";
import "../styles/home.css";

export default function Home() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/locations.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLocations(data);
      });
  }, []);

  return (
    <section>
       <div className="header-item">
                <img src="../falaise.png" alt="bgdimg"/>  
                <p>Chez vous, partout et ailleurs</p>
            </div>

      <div className="background">
        <div className="location-card-info">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}
