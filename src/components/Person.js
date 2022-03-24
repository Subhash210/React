import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>I am {person.name} , I am {person.age} years old and my super hero name is {person.heroName}</h2>
    </div>
  )
}

export default Person
