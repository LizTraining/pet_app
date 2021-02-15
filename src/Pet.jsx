import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Bertie from "./Bertie.jpg";
import Winston from "./Winston.jpg";
import Molly from "./Molly.jpg";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";


const whichImage = (petId, image) => {
  switch(petId) {
    case 1:
      image = Molly;
      break;
    case 2:
      image = Bertie;
      break;
    default:
      image = Winston;
  }
  return image;
}

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
      });
    }, []);

    const { id:petId, name, age, sex, typeOfAnimal, breed, colour, weightInKg } = petDetails?.length > 0 ? petDetails[0]:{};

    let history = useHistory();

    const image = Winston;


    return (
      <div key={id}>
        {petDetails ? (
        <div> 
          <button onClick={() => history.push(`/`)}> Return to list </button>
            
                <Card>
                  <h1> {`id: ${petId}`} </h1> 
                  <h1> {`Name: ${name}`} </h1>
                  <h1> {`Age: ${age}`} </h1>
                  <h1> {`Sex: ${sex}`} </h1> 
                  <h1> {`Type: ${typeOfAnimal}`} </h1>
                  <h1> {`Breed: ${breed}`} </h1>
                  <h1> {`Colour: ${colour}`} </h1>
                  <h1> {`Weight (kg): ${weightInKg}`} </h1> 

                  <img src={whichImage(petId, image)} alt="" />  
               </Card> 
                    
        </div>
        ) : (
            <CircularProgress />
        )}
      </div>
    );

}; 

export default Pet;