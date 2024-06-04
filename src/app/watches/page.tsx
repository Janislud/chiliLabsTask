import Products from "@/components/Products";
import { getWatch } from "@/helpers";

const Watches = async () => {
    const products = await getWatch();
    return (
        <div>
            <Products products={products} />
        </div>
    )
}

export default Watches;