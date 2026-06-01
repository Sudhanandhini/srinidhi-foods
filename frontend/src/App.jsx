import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Recipes from './pages/Recipes'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'
import RecipeDetail from './pages/RecipeDetail'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { ProductProvider } from './context/ProductContext'

const WA_BUTTON = (
  <a
    href="https://wa.me/919845343999"
    target="_blank"
    rel="noreferrer"
    style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999, background: '#25D366', color: 'white', borderRadius: '999px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, boxShadow: '0 4px 20px rgba(0,0,0,0.2)', textDecoration: 'none' }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zm-8.475 18.3h-.004a9.884 9.884 0 01-5.031-1.378l-.361-.214-3.741.975.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm5.43-7.403c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
    Contact us
  </a>
)

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:slug" element={<RecipeDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
      {WA_BUTTON}
    </div>
  )
}

export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}
