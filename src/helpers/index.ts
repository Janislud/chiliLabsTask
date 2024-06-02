const getData = async () => {
    const res = await fetch('https://jsonserver.reactbd.com/phone');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }


  export const getSingleProduct = async (id: number) => {
    try {
      const res = await fetch(`https://jsonserver.reactbd.com/phone/${id}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch product with id ${id}`);
      }
      const product = await res.json();
      console.log("Fetched product:", product); // Логируем полученные данные
      return product;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };