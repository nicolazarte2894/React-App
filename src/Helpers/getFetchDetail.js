export const getFetchDetail = async (setProduct, id) => {
    const data = await fetch('../../Data/burger-data.json');
    const data_parsed = await data.json();
    try {
        const data_found = data_parsed.find(item => item.id === id);
        setProduct(data_found);
    } catch (error) {
        console.log(error);
    }
}