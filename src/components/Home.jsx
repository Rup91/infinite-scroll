import { useEffect, useState } from "react"
import Products  from './Products';
import Loading from './Loading';

function Home() {

    const [products, setProducts] = useState([]);
    const [_offSet, setOffSet ] = useState(0);
    const [loading, setLoading ] = useState(false)

    const getProductLists = async ()  => {
        const productList = await fetch('https............')
        const data = await productList.json();
        setProducts(prev => [...prev, ...data])
        setLoading(false)
    }


    useEffect(() => {
        getProductLists();
    }, [_offSet]);

    const handleScroll = async () => {
        try {
           if ((window.innerHeight + document.documentElement.scrollTop + 2) >= document.documentElement.scrollHeight) {
                setLoading(true)
                setOffSet(prev => prev + 10)
           }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);



    return(
        <>
            {
                products.length
                ? 
                <>
                    <Products productInfo={products} />
                    { loading && <Loading /> }
                </>
                              
                : <h1>No records Found</h1>
            }
        </>
    )

}

export default Home