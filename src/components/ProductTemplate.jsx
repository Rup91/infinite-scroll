
import './Products.css';

const ProductTemplate = ({product}) => {
    const { title, price, description, category } = product;
    const url = `https://picsum.photos/200/300?random=${category.id}`;
    return(
        <>
            <div className="product__card">
                <img src={url} alt="Avatar" />
                <div className='product__info'>
                        <p>{category.id}</p>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProductTemplate;