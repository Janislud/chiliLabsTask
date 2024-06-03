import Products from "@/components/Products";
import { getPhoneCase } from "@/helpers";
import Link from "next/link";


const PhoneCase = async () => {
    const products = await getPhoneCase();
    return (
        <div>
            <Link href={'/'}>Home</Link>
            <Products products={products}/>
        </div>
  );
};

export default PhoneCase;
