import instance from "../../config/AxiosConfig";

const ProductService = {
    getTop5: async () => {
        return await instance.get(`/api/products/top5`);
}
}

export {ProductService};