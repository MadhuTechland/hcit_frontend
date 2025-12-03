import api from './api';

export const testimonialService = {
  getAll: () => api.get('/testimonials'),
};

export default testimonialService;
