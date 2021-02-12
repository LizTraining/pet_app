import React from "react";
import { useHistory } from "react-router-dom";

const PetCard = (props) => {
    
    const {petDetails} = props;
    // eslint-disable-next-line
    const { id, name, age, sex, typeOfAnimal, breed, colour, weightInKg } = petDetails || {}
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
            <h4> {`${name} the ${typeOfAnimal}`} </h4>
        </div>
    );
};

export default PetCard;