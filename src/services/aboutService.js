import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

const aboutService = {
    // Get all about pages
    getAllPages: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/about-pages`);
            return response.data;
        } catch (error) {
            console.error('Error fetching about pages:', error);
            throw error;
        }
    },

    // Get a single about page by slug
    getPageBySlug: async (slug) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/about-pages/${slug}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching about page ${slug}:`, error);
            throw error;
        }
    },

    // Get all leadership members
    getAllLeadershipMembers: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/leadership-members`);
            return response.data;
        } catch (error) {
            console.error('Error fetching leadership members:', error);
            throw error;
        }
    },

    // Get a single leadership member by ID
    getLeadershipMemberById: async (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/leadership-members/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching leadership member ${id}:`, error);
            throw error;
        }
    },

    // Get all partners
    getAllPartners: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/partners`);
            return response.data;
        } catch (error) {
            console.error('Error fetching partners:', error);
            throw error;
        }
    },

    // Get featured partners
    getFeaturedPartners: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/partners/featured`);
            return response.data;
        } catch (error) {
            console.error('Error fetching featured partners:', error);
            throw error;
        }
    },

    // Get a single partner by slug
    getPartnerBySlug: async (slug) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/partners/${slug}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching partner ${slug}:`, error);
            throw error;
        }
    }
};

export default aboutService;
