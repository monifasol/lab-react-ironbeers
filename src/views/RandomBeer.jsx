import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import BeerDetails from '../components/BeerDetails'

const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

const RandomBeer = (props) => {
    
    const [beer, setBeer] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const apiCall = `${apiURL}/random`

    useEffect( ()=> {
        axios.get(apiCall)
            .then( response => {
                setBeer(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                setIsError(true)
                console.log(error)
            })
    } , [apiCall])    

    return <BeerDetails beer={beer} isLoading={isLoading} isError={isError} />
}

export default RandomBeer
