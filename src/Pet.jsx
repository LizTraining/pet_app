import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const Pet = () => {
    const { id } = useParams();

    const [petDetails, setPetDetails] = useState();

    useEffect(() => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/LizAston/pet_app_db/pets/${id}`)
        .then((res) => {
          const responsePet = res.data;
          setPetDetails(responsePet);
          console.log(responsePet);
      });
    }, [id]);

    const { id:petId, name, age, sex, typeOfAnimal, breed, colour, weightInKg } = petDetails || {};

    return (
      <div key={petId}>
        {petDetails ? (
        <div> 
            <h1> {`id: ${petId}`} </h1> 
            <h1> {`Name: ${name}`} </h1>
            <h1> {`Age: ${age}`} </h1>
            <h1> {`Sex: ${sex}`} </h1> 
            <h1> {`Type: ${typeOfAnimal}`} </h1>
            <h1> {`Breed: ${breed}`} </h1>
            <h1> {`Colour: ${colour}`} </h1>
            <h1> {`Weight (kg): ${weightInKg}`} </h1>
        </div>
        ) : (
            <CircularProgress />
        )}
      </div>
    );

}; 

export default Pet;