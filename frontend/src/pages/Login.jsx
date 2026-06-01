import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const CREDENTIALS = { email: 'admin@srinidhifoods.com', password: 'Admin@123' }

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (email === CREDENTIALS.email && password === CREDENTIALS.password) {
      localStorage.setItem('sf_auth', '1')
      navigate('/dashboard')
    } else {
      setError('Invalid email or password. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#002A33] flex items-center justify-center px-4">
      <div className="bg-white rounded-sm shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#77B81E] px-8 py-6 text-center">
          <h1 className="text-2xl font-bold text-white tracking-wide">Srinidhi Foods</h1>
          <p className="text-white/80 text-sm mt-1">Admin Panel</p>
        </div>

        {/* Form */}
        <div className="px-8 py-8">
          <h2 className="text-xl font-bold text-[#002A33] mb-1">Sign In</h2>
          <p className="text-gray-400 text-xs mb-6">Enter your credentials to access the dashboard</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-sm mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@srinidhifoods.com"
                required
                className="w-full border border-gray-200 px-4 py-2.5 text-sm rounded-sm outline-none focus:border-[#77B81E] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full border border-gray-200 px-4 py-2.5 pr-12 text-sm rounded-sm outline-none focus:border-[#77B81E] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                >
                  {showPass ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#77B81E] hover:bg-[#5a8e14] text-white font-bold py-3 rounded-sm transition-colors text-sm tracking-wide"
            >
              Login to Dashboard
            </button>
          </form>

          <div className="mt-6 p-3 bg-gray-50 rounded-sm border border-gray-100 text-xs text-gray-500">
            <p className="font-semibold text-gray-600 mb-1">Demo credentials</p>
            <p>Email: admin@srinidhifoods.com</p>
            <p>Password: Admin@123</p>
          </div>
        </div>

        <div className="px-8 pb-6 text-center">
          <Link to="/" className="text-[#77B81E] text-sm hover:underline">← Back to Website</Link>
        </div>
      </div>
    </div>
  )
}
