import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Pet = () => {
    const { id } = useParams();
    console.log("Pet!")

    const [petDetails, setPetDetails] = useState();

    useEffect(() => {
        axios
        .get(`https://my-json-server.typicode.com/LizAston/pet_app_db/pets/?id=${id}`)
        .then((res) => {
          const responsePet = res.data;
          setPetDetails(responsePet);
          console.log(responsePet);
      });
    }, []);

    const { id:petId, name, age, sex, typeOfAnimal, breed, colour, weightInKg } = petDetails?.length > 0 ? petDetails[0]:{};

    let history = useHistory();


    return (
      <div key={id}>
        {petDetails ? (
        <div> 
            {/*<button onClick={()=>{showPetList()}}> Return to list </button>*/}
            <button onClick={() => history.push(`/`)}> Return to list </button>

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