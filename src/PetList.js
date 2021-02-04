import React, { useState, useEffect } from "react";
//import axios from "axios";

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('fake.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

const PetList = () => {
  const [pets, setPets] = useState();

  useEffect(() => {
    server.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "https://my-json-server.typicode.com/LizAston/pet_app-db"); // update to match the domain you will make the request from
      // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
      const responsePets = res.data;
      setPets(responsePets);
    })
    server.use(router)
    server.listen(3000, () => {
      console.log('JSON Server is running')
    })
    
  }, []);

  console.log("Please say hello");

  return (
    <div>
      <h2> My Pets </h2>
      {pets &&
        pets.map((pet) => {
          // eslint-disable-next-line
          const { id, name, age, sex, typeOfAnimal, breed, colour, weightInKg } = pet;
          return (
            <div key={id}>
              <h5> {name} </h5>
            </div>
          );
        })}
    </div>
  );
};

export default PetList;
