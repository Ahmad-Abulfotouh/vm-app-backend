import { useState, useContext } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import UserContext from '../context/UserContext'

// icons
import { FcGoogle } from 'react-icons/fc'

function SignIn() {
  const navigate = useNavigate()
  const { login } = useContext(UserContext)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  const handleChange = (e) => {
    setFormData((p) => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const userData = {
      email, password
    }
    const res = await login(userData)
    if(res === 200) navigate('/')
    else toast.error('unvalid data')
    console.log('myyyy: ', res)
  }

  return (
    <div className='sign-in'>
      <h1>welcome!</h1>
      <form onSubmit={handleSubmit} >
      <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={handleChange} required />
        <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={handleChange} required />
        <button type="submit">sign in</button>
        <Link to='/forgot-password'>forgot password</Link>
        <Link to='/sign-up'>don't have an account? sign up</Link>
      </form>
      <div className="google-sign-in"><FcGoogle /><span>sign in with google</span></div>
    </div>
  )
}

export default SignIn