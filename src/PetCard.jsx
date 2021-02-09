import React from "react";
import { useHistory } from "react-router-dom";

const PetCard = (props) => {

    {console.log("Pet card")}
    const {pet} = props;
    // eslint-disable-next-line
    const { id, name, age, sex, typeOfAnimal, breed, colour, weightInKg } = pet || {}
    let history = useHistory();

    return (
        <div key={id} style={{ 
            backgroundColor: "grey", 
            margin: "10px", 
            padding: "15px", 
            width: "150px" 
            }}
            onClick={() => history.push(`/pet/${id}`)}
        >
            <h4> {`${name} is a ${typeOfAnimal}`} </h4>
        </div>
    );
};

export default PetCard;