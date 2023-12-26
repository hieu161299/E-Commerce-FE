import instance from "../../config/AxiosConfig";

const ProductService = {
    getAllProducts : async (productName , minPrice , maxPrice , brandName , categoryName ,color ) => {
        return await instance.get(`/api/products?productName=${productName}&minPrice=${minPrice}&maxPrice=${maxPrice}&brandName=${brandName}&categoryName=${categoryName}&color=${color}`)
    },
    getTop5: async () => {
        return await instance.get(`/api/products/top5`);
}
}

export {ProductService};