import Products from "@/components/Products";
import { getAccsesories } from "@/helpers";

const Accsesories = async () => {
    const products = await getAccsesories();
    return (
        <div>
            <Products products={products}/>
        </div>
    )
}

export default Accsesories;