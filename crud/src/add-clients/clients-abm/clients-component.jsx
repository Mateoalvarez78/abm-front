import "./clients-component.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
const API = "https://crudcrud.com/api/2f4d8bff1177404caa2386d346118b7b";
const model  = "/clients";


const AddNewClient = ({createNewclient, setCreateNewClient}) => {

    const [id, setId] = useState(0);
    const [submited, setSubmited] = useState(true);
    const [valid, setValid] = useState(true)

    const [newClient, setNewClient] = useState({
        id: id,
        name:"",
        surname:"",
        rut:"",
        company:"",
        phone:"",
        active: ""
    });


    const cargaCliente = async function (){ 
        const url = API + model
        axios.get(url).then( response => {
            console.log(response.data)
        }).catch( error => {
            console.log("error :: ", error)
        })
    }

    const guardarCliente = async function (){

        const url = API + model
        setId(newClient.id++)
        
        if(newClient.id){
            setValid(false)
            if(newClient.name && newClient.surname && newClient.rut && newClient.company && newClient.phone && newClient.active){
                setCreateNewClient([...createNewclient, newClient]);
                
                setSubmited(false);
                resetInput();
                
            await axios.post(url + '/' + newClient.id, {data: newClient}).then( response => {
                console.log("sucess :: ", response)
                console.log(createNewclient, "newClient console")
                cargaCliente()
    

            }).catch( error => {
                console.log("error :: ", error)
            })}
        } else {
            axios.post(url, {data: newClient}).then( response => {

                console.log("sucess :: ", response)

            }).catch( error => {
                console.log("error :: ", error)
            })
        }
        // 
    }
    
const resetInput = () => {
    if(submited){
        
        setNewClient({
            id: id + 1,
            name:"",
            surname:"",
            rut:"",
            company:"",
            phone:"",
            active: ""
        });
    }
    setSubmited(true);
    setValid(true)
}

    
    const handleNameInputChange = (e) => {
        e.preventDefault();
        setNewClient({...newClient, name:e.target.value});
    }
    
    const handleSurnameInputChange = (e) => {
        e.preventDefault();
        setNewClient({ ...newClient, surname:e.target.value});
    }
    
    const handleRutInputChange = (e) => {
        e.preventDefault();
        setNewClient({ ...newClient, rut:e.target.value});
    }
    
    const handleCompanyInputChange = (e) => {
        e.preventDefault();
        setNewClient({ ...newClient, company:e.target.value});
    }
    
    const handlePhonenputChange = (e) => {
        e.preventDefault();
        setNewClient({ ...newClient, phone:e.target.value});
    }
    
    const handleActiveInputChange = (e) => {  
        e.preventDefault();  
        setNewClient({ ...newClient, active:e.target.value});
    }

    

    return(
        <>
            <div className="container-add-clients">
                <div className="container-modal">
                    <div>
                        <input value={newClient.id} placeholder="Id" className="input-add-clients" type="text" disabled/>
                    </div>
                    <div>
                    {!newClient.name && valid === false && (<span>Falta ingresar Nombre</span>)}
                     <input value={newClient.name} placeholder="Nombre" className="input-add-clients" type="text" onChange={handleNameInputChange}/>
                    </div>
                    <div>
                        {!newClient.surname && valid === false && (<span>Falta ingresar Apellido</span>)}
                        <input value={newClient.surname} placeholder="Apellido" className="input-add-clients" type="text" onChange={handleSurnameInputChange}/>
                    </div>
                    <div>
                         {!newClient.rut && valid === false && (<span>Falta ingresar Rut</span>)}
                        <input value={newClient.rut} placeholder="Rut" className="input-add-clients" type="number" onChange={handleRutInputChange}/>
                    </div>
                    <div>
                        {!newClient.company && valid === false && (<span>Falta ingresar Opción</span>)}
                        <select onChange={handleCompanyInputChange}>
                            <option value="Empresa">Empresa</option>
                            <option value="Consumidor-final">Consumidor final</option>
                        </select>
                    </div>
                    <div>
                        {!newClient.phone && valid === false && (<span>Falta ingresar Télefono</span>)}
                        <input value={newClient.phone} placeholder="Célular" className="input-add-clients" type="text" name="" id=""  onChange={handlePhonenputChange}/>
                    </div>
                    <div>
                        {!newClient.active && valid === false && (<span>Falta ingresar Activo</span>)}
                        <input value={newClient.active} placeholder="Activo" className="input-add-clients" type="text" onChange={handleActiveInputChange}/>
                    </div>
                    <button onClick={guardarCliente} className="add-client-buttom">Add</button>
                </div> 
            </div>
        </>
    )
}

export default AddNewClient;