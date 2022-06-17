export const getFetchDetail = async (setProducts, categoryId) => {
    const data = await fetch('../../Data/burger-data.json');
    const data_parsed = await data.json();
    try {
        const data_found = data_parsed.filter(item => item.category === categoryId);
        setProducts(data_found);
    } catch (error) {
        console.log(error);
    }
}