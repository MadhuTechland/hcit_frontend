import api from './api';

export interface Service {
  id: number;
  slug: string;
  title: string;
  icon?: string;
  short_description?: string;
  full_description?: string;
  features?: string[];
  image?: string;
  status: 'active' | 'inactive';
  order: number;
  created_at: string;
  updated_at: string;
}

export interface ServicesResponse {
  success: boolean;
  data: Service[];
}

export interface ServiceResponse {
  success: boolean;
  data: Service;
}

const serviceService = {
  /**
   * Get all active services
   */
  getAll: async (): Promise<ServicesResponse> => {
    // return api.get('/services');
    return api.get('/services');
  },

  /**
   * Get a single service by slug
   */
  getBySlug: async (slug: string): Promise<ServiceResponse> => {
    return api.get(`/services/${slug}`);
  },
};

export default serviceService;
