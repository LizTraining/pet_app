import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import PetCard from "./PetCard" 

const PetList = () => {

    const [pets, setPets] = useState();
    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/LizAston/pet_app_db/pets`).then((res) => {
          const responsePets = res.data;
          setPets(responsePets);
      });
    }, []);
    
    console.log(`Here we are: ${pets}`);

    return (
      <>{pets ? 
      (
      <div style = {{display: "flex", flexWrap: "wrap"}}>
          {Object.keys(pets).map((petDetails) => (
            <PetCard petDetails={petDetails} />
          ))}
      </div>
      )
      : <CircularProgress />}
      </>
    );
};

export default PetList;
