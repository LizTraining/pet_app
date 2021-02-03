import React, { useState, useEffect } from "react";
import axios from "axios";

const PetList = () => {
  const [pets, setPets] = useState();

  useEffect(() => {
    axios.get("./db.json").then((res) => {
      const responsePets = res.data;
      setPets(responsePets);
    });
  }, []);

  console.log(pets);

  return (
    <div>
      <h2> My Pets </h2>
      {pets &&
        pets.map((pet) => {
          // eslint-disable-next-line
          const { id, name, age, sex, typeOfAnimal, breed, colour, weightInKg } = pet;
          return (
            <div key={id}>
              <h5> {name} </h5>
            </div>
          );
        })}
    </div>
  );
};

export default PetList;
