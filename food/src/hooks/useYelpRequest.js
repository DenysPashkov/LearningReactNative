import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [getResults, setResults] = useState([])
    const [getErrorMessage, setErrorMessage] = useState('')

    async function makeRequest(searchTerm) {
        try {
            const response =  await yelp.get('/search', {
                params: {
                    limit: 49,
                    term: searchTerm,
                    location: 'Naples'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage("An error has appeared, prepare for battle!")
        }
    }

    
    useEffect( () => {
        makeRequest('')
    }, [])

    return [makeRequest, getResults, getErrorMessage]
}