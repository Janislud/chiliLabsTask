import Products from "@/components/Products";
import { getPhoneCase } from "@/helpers";

const PhoneCase = async () => {
    const products = await getPhoneCase();
    return (
        <div>
            <Products products={products}/>
        </div>
    );
};

export default PhoneCase;
