import instance from "../../config/AxiosConfig";

const BrandService = {
    getAllB1rand : async () => {
        return await instance.get(`/api/brands`)
    },
}

export default BrandService;