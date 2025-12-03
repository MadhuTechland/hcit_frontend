import api from './api';

export const caseStudyService = {
  getAll: () => api.get('/case-studies'),
  getBySlug: (slug: string) => api.get(`/case-studies/${slug}`),
};

export default caseStudyService;
