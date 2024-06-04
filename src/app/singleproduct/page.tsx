import { getSingleProduct } from "@/helpers";
import Image from "next/image";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;

  if (!_idString) {
    return <div className="text-center text-red-500">Product ID not found in search parameters</div>;
  }

  const _id = Number(_idString);
  const product = await getSingleProduct(_id);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-grey border-1">
        {product.image ? (
          <div className="relative h-124">
            <Image
              className="single-img"
              src={product.image}
              alt="product image"
              objectFit="cover"
              width={200}
              height={200}
              priority
            />
          </div>
        ) : (
          <p>Image not available</p>
        )}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl font-semibold mb-2">Price: {product.price}</p>
          <p className="text-gray-700 mb-2">Description: {product.description}</p>
          <p className="text-gray-700 mb-2">Category: {product.category}</p>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
