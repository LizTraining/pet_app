import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress, Typography, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Bertie from "./Bertie.jpg";
import Winston from "./Winston.jpg";
import Molly from "./Molly.jpg";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/styles";
import ArrowDropUpTwoToneIcon from '@material-ui/icons/ArrowDropUpTwoTone';

const useStyles = makeStyles(theme => ({
  media: {
    height: 400,
  }
}));


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
    
    const classes = useStyles();

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
          <IconButton onClick={() => history.push(`/`)}> 
            <ArrowDropUpTwoToneIcon />
            Return to list 
          </IconButton>

          <Typography variant="h5">
            <Card>
              <h5> {`id: ${petId}`} </h5> 
              <h5> {`Name: ${name}`} </h5>
              <h5> {`Age: ${age}`} </h5>
              <h5> {`Sex: ${sex}`} </h5> 
              <h5> {`Type: ${typeOfAnimal}`} </h5>
               <h5> {`Breed: ${breed}`} </h5>
              <h5> {`Colour: ${colour}`} </h5>
              <h5> {`Weight (kg): ${weightInKg}`} </h5> 

               <img src={whichImage(petId, image)} className={classes.media} alt="" />  
            </Card>    
          </Typography>
        </div>
        ) : (
            <CircularProgress />
        )}
      </div>
    );

}; 

export default Pet;