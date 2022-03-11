import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddContact from "./components/AddContact";
import Contactdetails from "./components/ContactDetails";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    
    <div className="ui container">
     
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/" render={(props)=> (<ContactList{...props}contacts={contacts} getContactId={removeContactHandler}></ContactList>)}>
      </Route>
      <Route path= "/add" render={(props)=> (<AddContact{...props}addContactHandler={addContactHandler}></AddContact>)}>
        
      </Route>
      <Route path= "/contact/:id" component={Contactdetails}>
      </Route>
      </Switch>
      </Router>
      
     
      {/* <AddContact addContactHandler={addContactHandler}></AddContact>
     <ContactList contacts={contacts} getContactId={removeContactHandler}></ContactList> */}
    </div>

    
  );
};

export default App;