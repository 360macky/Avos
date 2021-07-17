import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    window
      .fetch('api/avo')
      .then((response) => response.json())
      .then(({ allEntries, lengthEntries }) => {
        setProductList(allEntries)
      })
  }, [])

  return (
    <div>
      <div>My first Next.js project!</div>
      <ul>
        {productList.map((avocado) => (
          <li key={avocado['id']}>{avocado['name']}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
