import api from './api';

export const industryService = {
  getAll: () => api.get('/industries'),
  getBySlug: (slug: string) => api.get(`/industries/${slug}`),
};

export default industryService;
