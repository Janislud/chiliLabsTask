import Products from "@/components/Products";
import Link from "next/link";

const getData = async () => {
    const res = await fetch('https://jsonserver.reactbd.com/accessories');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }

const Accsesories = async () => {
    const products = await getData();
    return (
        <div>
            <Link href={'/'}>Home</Link>
            <Products products={products} />
        </div>
    )
}

export default Accsesories;