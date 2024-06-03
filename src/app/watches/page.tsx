import Products from "@/components/Products";
import { getWatch } from "@/helpers";
import Link from "next/link";

const Watches = async () => {
    const products = await getWatch();
    return (
        <div>
            <Link href={'/'}>Home</Link>
        <Products products={products} />
    </div>
    )
}

export default Watches;