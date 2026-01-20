import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://floralwhite-kudu-744792.hostingersite.com/api/v1';

const serviceService = {
    // Get all services
    getAll: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/services`);
            return response.data;
        } catch (error) {
            console.error('Error fetching services:', error);
            throw error;
        }
    },

    // Get a single service by slug
    getBySlug: async (slug) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/services/${slug}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching service ${slug}:`, error);
            throw error;
        }
    }
};

export default serviceService;
