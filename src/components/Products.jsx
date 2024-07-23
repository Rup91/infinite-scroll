
import ProductTemplate from './ProductTemplate'

const Products = ({productInfo}) => {

    return(
        <div className="product__container">
            {
                productInfo.map(item => {
                    return <ProductTemplate product={item} />
                })
            }
        </div>
    )
}

export default Products;