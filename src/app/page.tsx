"use client";
import React, { useEffect, useState } from 'react';
import Products from '../components/Products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getData } from '@/helpers';




export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData();
        setProducts(data);
        setLoading(false);
      } catch (err:any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header/>
      <Products products={products} />
      <Footer/>
    </>
  );
}

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
