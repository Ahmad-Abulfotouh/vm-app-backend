function UserReducer(state, action) {
    switch (action.type) {
        case 'RESET': return {
        ...state,
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: ''
        }
        case 'SET_LOADING': return {
            ...state,
            loading: true
        }
        default: return state
    }
    return (
    <div>AppReducer</div>
    )
  }
  export default UserReducer