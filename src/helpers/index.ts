export const getData = async () => {
    const res = await fetch('https://jsonserver.reactbd.com/amazonpro');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }

  export const getSingleProduct = async (id: number) => {
    try {
      const res = await fetch(`https://jsonserver.reactbd.com/amazonpro/${id}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch product with id ${id}`);
      }
      const product = await res.json();
      return product;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  export const getPhone = async () => {
    try {
      const res = await fetch(`https://jsonserver.reactbd.com/phone`);
      if (!res.ok) {
        throw new Error(`Failed to fetch product`);
      }
      const product = await res.json();
      return product;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };
  
  export const getPhoneCase = async () => {
    try {
      const res = await fetch(`https://jsonserver.reactbd.com/phonecase`);
      if (!res.ok) {
        throw new Error(`Failed to fetch product`);
      }
      const product = await res.json();
      return product;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  export const getAccsesories = async () => {
    try {
      const res = await fetch(`https://jsonserver.reactbd.com/accessories`);
      if (!res.ok) {
        throw new Error(`Failed to fetch product`);
      }
      const product = await res.json();
      return product;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  export const getWatch = async () => {
    try {
      const res = await fetch(`https://jsonserver.reactbd.com/watch`);
      if (!res.ok) {
        throw new Error(`Failed to fetch product`);
      }
      const product = await res.json();
      return product;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };