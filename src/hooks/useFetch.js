import { useState, useEffect } from 'react'

const fetchGetConfiguration = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
}

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const response = await fetch(url, fetchGetConfiguration)
            const data = await response.json()
            
            setTimeout(() => {
                setData(data)
                setLoading(false)
            }, 2000)

            setLoading(true)

        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return {data, loading, error}
}

export default useFetch