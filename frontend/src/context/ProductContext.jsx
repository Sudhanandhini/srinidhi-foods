import { createContext, useContext, useState } from 'react'
import { getAllProducts } from '../data/products'

const ProductContext = createContext()

function slugify(name, weight) {
  return `${name}-${weight}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(getAllProducts)

  function addProduct(data) {
    const slug = slugify(data.name, data.weight) + '-' + Date.now()
    setProducts(prev => [...prev, {
      slug,
      name: data.name,
      weight: data.weight,
      category: data.category,
      description: data.description,
      images: [data.imageUrl || 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80'],
      bg: data.bg || '#f0f4ff',
    }])
  }

  function updateProduct(slug, data) {
    setProducts(prev => prev.map(p => {
      if (p.slug !== slug) return p
      return {
        ...p,
        name: data.name,
        weight: data.weight,
        category: data.category,
        description: data.description,
        images: data.imageUrl ? [data.imageUrl] : p.images,
        bg: data.bg || p.bg,
      }
    }))
  }

  function deleteProduct(slug) {
    setProducts(prev => prev.filter(p => p.slug !== slug))
  }

  function getBySlug(slug) {
    return products.find(p => p.slug === slug)
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, getBySlug }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts() {
  return useContext(ProductContext)
}
