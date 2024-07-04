import React from 'react'

// Custom hook to fetch users
const useUserFetch = () => {
    const [loading, setLoading] = React.useState(false)
    const [users, setUsers] = React.useState([])
    
    React.useEffect(() => {
        const fetchUsers = async () => {
        setLoading(true)
        try {
            const res = await fetch("http://localhost:5000/api/user")
            console.log(res)
            if (!res.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await res.json()
            console.log(data)
            setUsers(data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
        }
    
        fetchUsers()
    }, [])
    
    return { loading, users }
 
}

export default useUserFetch