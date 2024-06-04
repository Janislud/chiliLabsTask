"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filterProducts = (searchTerm: string, allProducts: ProductProps[]) => {
    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    const filteredList = filterProducts(searchTerm, products);
    setFilteredProducts(filteredList);
  }, [searchTerm, products, currentPage]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(filteredProducts.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
      const filteredList = filterProducts(searchTerm, products);
      setFilteredProducts(filteredList);
    }
  };

  const getVisibleProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
    return filteredProducts.slice(startIndex, endIndex);
  };

  return (
    <main className="container mx-auto px-4 flex flex-wrap items-center text-center justify-center mt-9 mb-9">
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mx-auto text-center border border-black rounded-full p-3 mb-9"
      />

      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-10 mb-9">
        {getVisibleProducts().map((item) => (
          <Link href={`/singleproduct?_id=${item._id}`} key={item._id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg border border-grey border-1">
              {item.image ? (
                <Image className="img" src={item.image} alt={item.title} width={250} height={250} />
              ) : (
                <p>Image not available</p>
              )}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.price}$</p>
                <p className="text-gray-700 text-base">{item.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      
      {filteredProducts.length > itemsPerPage && (
        <div className="flex justify-center mt-5 mb-9">
          {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, i) => i + 1)
            .map((pageNumber) => (
              <button
                key={pageNumber}
                className={`px-3 py-2 mr-2 ${currentPage === pageNumber ? "bg-blue-500 text-white font-bold rounded" : "bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"}`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
        </div>
      )}
    </main>
  );
};

export default Products;