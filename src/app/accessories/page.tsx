import Products from "@/components/Products";
import { getAccsesories } from "@/helpers";
import Link from "next/link";

const Accsesories = async () => {
    const products = await getAccsesories();
    return (
        <div>
            <Link href={'/'}>Home</Link>
            <Products products={products}/>
        </div>
    )
}

export default Accsesories;