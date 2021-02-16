import React from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";

const PetCard = (props) => {
    
    const {petDetails} = props;
    // eslint-disable-next-line
    const { id, name, age, sex, typeOfAnimal, breed, colour, weightInKg } = petDetails || {}
    let history = useHistory();

    return (
        <div key={id} onClick={() => history.push(`/pet/${id}`)}>
         <Card>
           <Typography variant="h4">
             <h4> {`${name}`} </h4>
           </Typography>
           <Typography variant="h5">
             <h5>{ `the ${typeOfAnimal}`} </h5>
           </Typography>
           
         </Card>
        </div>
    );
};

export default PetCard;