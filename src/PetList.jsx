import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import PetCard from "./PetCard";
import { Grid } from "@material-ui/core";

const PetList = () => {

    const [pets, setPets] = useState();
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/LizAston/pet_app_db/pets`).then((res) => {
          const responsePets = res.data;
          setPets(responsePets);
      });
    }, []);

    return (
      <>{pets ? 
      (
      <div style = {{display: "flex", flexWrap: "wrap"}}>
          {pets.map((petDetails) => (
            <Grid item xs={12} sm={2}>
              <PetCard petDetails={petDetails} />
            </Grid>
          ))}
      </div>
      )
      : <CircularProgress />}
      </>
    );
};

export default PetList;
