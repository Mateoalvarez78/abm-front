import axios from "axios";
import "./abm-component.css";
import React, { useState } from "react";
import AddNewClient from "./clients-abm/clients-component";
const API = "https://crudcrud.com/api/2f4d8bff1177404caa2386d346118b7b";
const model  = "/clients";

const CustomerAbm = () =>{

    const [createNewclient, setCreateNewClient] = useState([]);

    const cargaCliente = async function (){ 
        const url = API + model;
        axios.get(url).then( response => {
            console.log(response.data)
        }).catch( error => {
            console.log("error :: ", error)
        })
    }

    const eliminarCliente = async function (id){ 
        const url = API + model +"/" + id;
        await axios.delete(url).then( response => {
            console.log("success eliminar :: ", response)
            cargaCliente()
        }).catch( error => {
            console.log("error :: ", error)
        })
    }

    const editarCliente = async function (id, cliente){
        const url = API + '/clients/' + id;
        return await axios.put(url, cliente).then(response => {
        return response.data;
        }).catch(error => {
            console.error('Error updating user profile:', error);
            throw error;
          });
    }

    return(
            <section className="container-custom-abm">
                <div><h3>Abm stock</h3></div>
                <div className="container-crud"> 
                    <ul className="category-list">
                        <li className="category-item item-id">_Id</li>
                        <li className="category-item item-name">Nombre</li>
                        <li className="category-item item-surname">Apellido</li>
                        <li className="category-item item-rut">Rut</li>
                        <li className="category-item item-company">Empresa / Consumido final</li>
                        <li className="category-item item-phone">Teléfono</li>
                        <li className="category-item item-active">Activo</li>
                    </ul>
                </div>
                <div className="container-crud"> 
                        {
                            createNewclient.map((client)=>{
                                return(
                        <ul className="category-list">
                            <li className="category-item item-id">{client.id}</li>
                            <li className="category-item item-name">{client.name}</li>
                            <li className="category-item item-surname">{client.surname}</li>
                            <li className="category-item item-rut">{client.rut}</li>
                            <li className="category-item item-company">{client.company}</li>
                            <li className="category-item item-phone">{client.phone}</li>
                            <li className="category-item item-active">{client.active}</li>
                            <li className="container-icons-action">
                                <div onClick={eliminarCliente(client.id)} className="background-edit-img"></div>
                                <div onClick={editarCliente(client.id)} className="background-delete-img"></div>
                            </li>
                        </ul>
                                )
                            })
                        }
                </div>
                <AddNewClient setCreateNewClient={setCreateNewClient} createNewclient={createNewclient}/>
            </section>
    )
}

export default CustomerAbm