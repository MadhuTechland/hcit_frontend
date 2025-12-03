import api from './api';

export interface HeroSection {
  id: number;
  page: string;
  title: string;
  subtitle?: string;
  description?: string;
  button_text?: string;
  button_link?: string;
  background_image?: string;
  status: 'active' | 'inactive';
  order: number;
  created_at: string;
  updated_at: string;
}

export interface HeroSectionsResponse {
  success: boolean;
  data: HeroSection[];
}

const heroService = {
  /**
   * Get all hero sections
   * @param page - Optional page filter (e.g., 'home', 'services')
   */
  getAll: async (page?: string): Promise<HeroSectionsResponse> => {
    const params = page ? { page } : {};
    return api.get('/hero-sections', { params });
  },

  /**
   * Get hero section for a specific page
   */
  getByPage: async (page: string): Promise<HeroSection | null> => {
    const response: HeroSectionsResponse = await api.get('/hero-sections', {
      params: { page },
    });
    return response.data[0] || null;
  },
};

export default heroService;
