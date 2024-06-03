"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredProducts.map((item) => (
          <Link 
            href={{
              pathname: "/singleproduct",
              query: { _id: item?._id.toString() }
            }} 
            key={item._id}
          >
            <div>
              {item.image ? (
                <Image src={item.image} alt={item.title} width={200} height={200} priority />
              ) : (
                <p>Image not available</p>
              )}
              <h2>{item.title}</h2>
              <p>{item.price}</p>
              <p>{item.previousPrice}</p>
              <p>{item.category}</p>
              <p>{item.brand}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
