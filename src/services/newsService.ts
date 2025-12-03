import api from './api';

export const newsService = {
  getAll: () => api.get('/news'),
  getBySlug: (slug: string) => api.get(`/news/${slug}`),
};

export default newsService;
