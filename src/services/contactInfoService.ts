import api from './api';

export const contactInfoService = {
  getAll: () => api.get('/contact-info'),
  getByType: (type: string) => api.get(`/contact-info/${type}`),
};

export default contactInfoService;
