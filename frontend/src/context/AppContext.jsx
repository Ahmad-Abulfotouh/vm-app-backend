import {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const API_URL = '/api/machines/'
const AppContext = createContext()

export const AppProvider = ({children}) => {

	const initialState = {
		machines: {},
		machineId: '1',
		machineData: {},
		orderList: [],
		totalOrderPrice: 0,
		loading: false
	}

	
	initialState.machineData.products = [
		{
			id: 1,
			title: 'coca cola',
			imgUrl: 'imgs/coca.jpg',
			price: 5.5,
			discount: 0
		},
		{
			id: 2,
			title: 'coca cola zero',
			imgUrl: 'imgs/coca-zero.jpeg',
			price: 5.5,
			discount: 0
		},
		{
			id: 3,
			title: 'sprite',
			imgUrl: 'imgs/sprite.jpg',
			price: 5.5,
			discount: 0
		}
	]

	// hi
	function hi(text) {
		console.log('hi from ' + text)
	}

	// Set Loading
	const setLoading = () => dispatch({type: 'SET_LOADING'})

	// get machines id
	const getMachines = async () => {

	}
	
	// get products
	const getMachineData = async (machine) => {
		setLoading()

		const response = await axios.get(API_URL, machine).catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              return error.response.status
            }
        })
		console.log(response)
		if(response.data) {
			const data = await response.data.json()

			dispatch({
				type: 'GET_MACHINE_DATA',
				payload: data
			})
		}
	}

	const [state, dispatch] = useReducer(AppReducer, initialState)

	return <AppContext.Provider value={{
		...state,
		dispatch,
		hi,
		getMachineData
	}}> {children} </AppContext.Provider>
}

export default AppContext