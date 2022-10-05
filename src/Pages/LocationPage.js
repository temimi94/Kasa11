import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../Components/Avatar";
import Start from "../Components/Start";
import Tags from "../Components/Tags";
import AccordionLocation from "../Components/AccordionLocation";
import Galery from "../Components/Galery";
import "../Styles/LocationPage.css";

export default function LocationPage() {
  const [location, setLocation] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
  });
  console.log(location);
  let { id } = useParams();

  useEffect(function () {
    fetch("/locations.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === id) {
            setLocation(data[i]);
          }
        }
      });
  });

  return (
    <div className="body_location_page">
      <div className="slideshow_location">
        <Galery img={location.pictures} />
      </div>
      <section className="display">
        <div className="presentation">
          <div className="location_header">
            <div>
              <h2 className="title_locationpage">{location.title}</h2>
              <p className="subtitle_locationpage">{location.location}</p>
            </div>
            <div className="main-container-tag">
              {location.tags.map((tag) => (
                <Tags content={tag} key={tag} />
              ))}
            </div>
          </div>
        </div>
        <div className="location_subheader">
          <div>
            <Avatar name={location.host.name} picture={location.host.picture} />
          </div>

          <div className="main-container-stars">
            <Start rating={location.rating} key={location.id} />
          </div>
        </div>
      </section>
      <div className="profile-prop">
        <div className="main-container-accordion">
          <div className="accordion-container-left">
            <AccordionLocation
              title="Description"
              content={location.description}
            />
          </div>

          <div className="accordion-container-right">
            <AccordionLocation
              title="Equipement"
              content={
                <ul>
                  {location.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
