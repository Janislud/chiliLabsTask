"use client";
import React, { useEffect, useState } from 'react';
import Products from '../components/Products';

const getData = async () => {
  const res = await fetch('https://jsonserver.reactbd.com/phone');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

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
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <Products products={products} />
    </main>
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
