import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://floralwhite-kudu-744792.hostingersite.com/api/v1';

const productService = {
    // Get all products
    getAll: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/products`);
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    // Get a single product by slug
    getBySlug: async (slug) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/products/${slug}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product ${slug}:`, error);
            throw error;
        }
    }
};

export default productService;
