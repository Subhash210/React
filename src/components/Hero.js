import React from 'react'

function Hero({heroName}) {
    if(heroName=="Joker"){
        throw new Error("Not A Hero")
    }
    return (
        <h1>
            {heroName}
        </h1>
    )


}

export default Hero
