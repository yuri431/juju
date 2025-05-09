import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const data = new FormData()
            data.append("email", email)
            data.append("phone", phone)

            const response = await axios.post('https://teekay.pythonanywhere.com/api/signin', data)

            setLoading(false)
            if (response.data && response.data.success) {
                // Store user in localStorage and redirect to home
                if (response.data.user) {
                    localStorage.setItem("user", JSON.stringify(response.data.user))
                    navigate("/home")
                } else {
                    setError(response.data.message || "Login failed")
                }
            } else {
                setError(response.data.message || "Invalid credentials")
            }
        } catch (error) {
            setLoading(false)
            setError("An error occurred. Please try again.")
        }
    }

    return (
        <div className="row justify-content-center mt-5">
            <div className="card shadow signin col-md-4 p-4">
                <h1 className="text-center">Sign In</h1>
                <h4 className="text-center text-info">Welcome To Juju</h4>
                <form onSubmit={submit}>
                    {loading && <h5 className="text-info">Loading...</h5>}
                    {error && <h5 className="text-danger">{error}</h5>}
                    <input 
                        type="email" 
                        placeholder="Enter email" 
                        required 
                        className="form-control" 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <br />

                    <input 
                        type="phone" 
                        placeholder="Enter phone" 
                        required 
                        className="form-control" 
                        onChange={(e) => setPhone(e.target.value)} 
                    />
                    <br /><br />
                    <button type="submit" className="btn btn-primary w-100">Sign In</button>
                    <br /><br />
                    <p className='text-light'>Don't have an account? <Link to="/signup" className="text-light">Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signin
