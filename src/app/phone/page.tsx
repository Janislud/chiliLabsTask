import Products from "@/components/Products";
import { getPhone } from "@/helpers";
import Link from "next/link";


const PhoneCase = async () => {
    const products = await getPhone();
    return (
        <div>
            <Link href={'/'}>Home</Link>
            <Products products={products}/>
        </div>
    );
};

export default PhoneCase;
