import './MainContent.css'

export default function MainContent({products}) {
    return <>
       <div className='main'>
      <h2>PRODUCTS CART</h2>
      <div className="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} style={{ height: '150px', width: '150px' }} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
}