
import Test from '../testComponent/Test';
import Loader from '../loader/Loader';
import Error from '../error/Error';


import { useProductsHttp } from '../../hooks/htttp.products';



function App() {

	const {product, loading, error} = useProductsHttp()

	return (
		<div className='container mx-auto max-w-2xl pt-5'>
			{loading && <Loader/>}
			{error && <Error/>}
			{product.map(product => <Test products={product} key={product.id} />)}
		</div>
	)
}

export default App;



// 1:03:36


