import {createContext, useReducer} from 'react'
import UserReducer from './UserReducer'
import axios from 'axios'

const API_URL = '/api/users/'
const UserContext = createContext()

export const UserProvider = ({children}) => {

    // get user
    const user = JSON.parse(localStorage.getItem('user'))

	const initialState = {
		user: user ? user : null,
        isError: false,
        isSuccess: false,
		isLoading: false,
        message: ''
	}

	// hi
	function hi(text) {
		console.log('hi from ' + text)
	}

	// Set Loading
	const setLoading = () => dispatch({type: 'SET_LOADING'})

    // register user
    const register = async (userData) => {
        const response = await axios.post(API_URL, userData)
        
        if(response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        } else if(response.status === 400){
            return 0
        }

        return response.data
    }

    // login
    const login = async (userData) => {
        const response = await axios.post(API_URL + 'login', userData).catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              return error.response.status
            }
        })

        if(response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.status
    }

    // logout
    const logout = () => {
        localStorage.removeItem('user')
    }

	const [state, dispatch] = useReducer(UserReducer, initialState)

	return <UserContext.Provider value={{
		...state,
		dispatch,
		hi,
        register,
        login,
        logout
	}}> {children} </UserContext.Provider>
}

export default UserContext