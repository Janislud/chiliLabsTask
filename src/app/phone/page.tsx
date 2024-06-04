import Products from "@/components/Products";
import { getPhone } from "@/helpers";

const PhoneCase = async () => {
    const products = await getPhone();
    return (
        <div>
            <Products products={products}/>
        </div>
    );
};

export default PhoneCase;
