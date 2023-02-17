import Person from './components/Person'
import { useState } from 'react'

const App = () => {
  // persons is a list of objects
  const [persons, setPersons] = useState(
    [
      { name: 'Arto Hellas', phoneNo: 40 },
      { name: 'Ada Lovelace', phoneNo: 39 },
      { name: 'Dan Abramov', phoneNo: 12 },
      { name: 'Mary Poppendieck', phoneNo: 39 }
    ]
  )
  // newName is a String
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState(null)

  // set the person object name to value from <input>
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilter = (event) => {
    let filteredList = persons.filter(
      person => 
      person.name.includes(event.target.value.toLowerCase()));
    setPersons(filteredList.concat());
  }
  /*
  On form submission, create and append new person object
  to copy of persons list and update list
  */
  const handleAddName = (event) => {
    event.preventDefault();
    const personNames = persons.map(person => person.name);
    if (personNames.includes(newName)) {
      alert(`${newName} is already added to the phonebook.`)
    }
    else {
      const personObj = {
        name: newName,
        phoneNo: newNumber
      }

      const updatedPersons = persons.concat(personObj);
      setPersons(updatedPersons);
      //setNewName('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFilter}/>
      </div>
      <form onSubmit={handleAddName}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>number: <input onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(
          person =>
            // <div key={person.name}>
            //   <p>{person.name} {person.phoneNo}</p>
            // </div>
            <Person key={person.name} name={person.name} phoneNo={person.phoneNo} />
        )
      }
    </div>
  )
}

export default App