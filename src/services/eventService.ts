import api from './api';

export const eventService = {
  getAll: () => api.get('/events'),
  getBySlug: (slug: string) => api.get(`/events/${slug}`),
};

export default eventService;
