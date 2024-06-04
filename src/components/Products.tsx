"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ProductProps {
  _id: number;
  title: string;
  image: string;
  price: number;
  previousPrice: number;
  isNew: boolean;
  category: string;
  brand: string;
}

interface Props {
  products: ProductProps[];
}

const Products = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>(products);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 300); 

    return () => clearTimeout(delayDebounceFn); 
  }, [searchTerm, products]);

  return (
    <div className='container mx-auto px-4 flex flex-wrap items-center text-center justify-center mt-9 '>

        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mx-auto text-center border border-black rounded-full p-3 mb-9"
        />

      <div className='container mx-auto px-4 flex flex-wrap items-center justify-center gap-10'>
          {filteredProducts.map((item) => (
            <Link href={`/singleproduct?_id=${item._id}`} key={item._id}>
              <div className='max-w-sm rounded overflow-hidden shadow-lg border border-grey border-1'>
                {item.image ? (
                  <img className='w-full' src={item.image} alt={item.title} />
                ) : (
                  <p>Image not available</p>
                )}
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{item.title}</div>
                  <p className='text-gray-700 text-base'>{item.price}$</p>
                  <p className='text-gray-700 text-base'>{item.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default Products;
