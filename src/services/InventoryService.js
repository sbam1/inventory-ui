import axios from 'axios';

const BRANDS_API_BASE_URL = "http://localhost:8080/inventory/brands";


class InventoryService {
    getAllBrands() {
        return axios.get(BRANDS_API_BASE_URL);
    }

    // get(id) {
    //     return http.get(`/tutorials/${id}`);
    // }
    //
    // create(data) {
    //     return http.post("/tutorials", data);
    // }
    //
    // update(id, data) {
    //     return http.put(`/tutorials/${id}`, data);
    // }
    //
    // delete(id) {
    //     return http.delete(`/tutorials/${id}`);
    // }
    //
    // deleteAll() {
    //     return http.delete(`/tutorials`);
    // }
    //
    // findByTitle(title) {
    //     return http.get(`/tutorials?title=${title}`);
    // }
}

export default new InventoryService();
