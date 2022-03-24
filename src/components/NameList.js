import React from 'react'
import Person from './Person'

function NameList() {
    const names = ["Bruce Wayn" , "Steven" , "Diana"]
    const person = [
        {
            id : 1,
            name : "Bruce Wayn",
            age : 28,
            heroName : "Batman" 
        },
        {
            id : 2,
            name : "Steven",
            age : 125,
            heroName : "Superman" 
        },
        {
            id : 3,
            name : "Diana",
            age : 25,
            heroName : "Wonder Women" 
        }
]
//     const personList = person.map(person => <Person key={person.id} person = {person}/> )
//   return <div>{personList}</div>
    const nameList = names.map((name ,index) => <h2 key={index}>{name}</h2> )
    return <div>{nameList}</div>
}

export default NameList
