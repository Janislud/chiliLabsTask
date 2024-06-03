import { getSinglePhoneCase, getSingleProduct } from "@/helpers";
import Image from "next/image";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;

  if (!_idString) {
    return <div>Product ID not found in search parameters</div>;
  }

  const _id = Number(_idString);
  const product = await getSingleProduct(_id);
  const phonecase = await getSinglePhoneCase(_id);
 

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {product.image ? (
        <Image
          src={product.image}
          alt="product image"
          width={500}
          height={500}
          priority
        />
      ) : (
        <p>Image not available</p>
      )}
      <h1>{product.title}</h1>
      <p>Price: {product.price}</p>
      <p>Previous Price: {product.previousPrice}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
    </div>
  );
};

export default SingleProduct;
