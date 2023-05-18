import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import UserContext from '../context/UserContext'

function SignUp() {
  const navigate = useNavigate()
  const { register } = useContext(UserContext)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

  const handleChange = (e) => {
    setFormData((p) => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if(password !== password2) toast.error('Passwords do not match')
    else {
      const userData = {
        name, email, password
      }
      register(userData)
      navigate('/')
    }
  }

  return (
    <div className='sign-in'>
      <h1>sign up</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={handleChange} required />
        <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={handleChange} required />
        <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={handleChange} required />
        <input type="password" name="password2" id="password2" placeholder='Confirm Password' value={password2} onChange={handleChange} required />
        <button type="submit">sign up</button>
      </form>
    </div>
  )
}

export default SignUp