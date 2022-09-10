import { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom"

const EditProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const { id } = useParams()

  useEffect(() => {
    getProductById()
  }, [])

  const getProductById = async() => {
    const response = await fetch (`http://localhost:8080/products/products/${id}`)
    const data = await response.json()
    setTitle(data.title)
    setPrice(data.price)
  } 

  const updateProduct = async(e) => {
    e.preventDefault()
    const product = { title, price }
    await fetch(`http://localhost:8080/products/products/${id}`,{
      method: "PUT",
      body: JSON.stringify(product),
      headers:{
        'Content-type': 'application/json'
      }
    })
    history.push("/")
  }

  return (
    <div>
      <form>
        <div className="field">
          <label className="label">Title</label>
          <div>
            <input className="input" value={title} onChange></input>
          </div>
        </div>
      </form>

    </div>
  )
}

export default EditProduct