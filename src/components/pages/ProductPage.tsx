
import Test from '../testComponent/Test';
import Loader from '../loader/Loader';
import Error from '../error/Error';


import { useProductsHttp } from '../../hooks/htttp.products';
import Modal from '../modal/Modal';
import CreateProduct from '../createProduct/CreateProduct';
import { useContext } from 'react';
import { IProduct } from '../../models';
import { ModalContext } from '../../context/ModalContext';


const ProductPage = () => {
    const { product, loading, error, addProduct } = useProductsHttp();
	const { modal, open, close } = useContext(ModalContext);

	const createHandler = (product: IProduct) => {
		close()
		addProduct(product);
	}

	return (
		<div className='container mx-auto max-w-2xl pt-5'>
			{loading && <Loader />}
			{error && <Error error={error} />}
			{product.map(product => <Test products={product} key={product.id} />)}

			{modal && <Modal title='Create new product' onClose={() => close()}>
				<CreateProduct onCreate={createHandler} />
			</Modal>}

			<button
				className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
				onClick={() => open()}>
				+
			</button>

		</div>
	)
}

export default ProductPage;