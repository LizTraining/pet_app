import React from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

const PetCard = (props) => {
    
    const {petDetails} = props;
    // eslint-disable-next-line
    const { id, name, age, sex, typeOfAnimal, breed, colour, weightInKg } = petDetails || {}
    let history = useHistory();

    return (
        <div key={id} onClick={() => history.push(`/pet/${id}`)}>
         <Card>
           <h4> {`${name} the ${typeOfAnimal}`} </h4>
         </Card>
        </div>
    );
};

export default PetCard;