import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [Product, setProduct] = useState<any>({})
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then(({ avocadoData }) => {
          setProduct(avocadoData)
          console.log(avocadoData)
          console.log('avocadoDatsa')
        })
    }
  }, [])

  return (
    <section>
      <h1>Item: {Product.name} </h1>
    </section>
  )
}

export default ProductPage
