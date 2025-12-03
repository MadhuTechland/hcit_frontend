import api from './api';

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  blogs_count?: number;
  created_at: string;
  updated_at: string;
}

export interface BlogTag {
  id: number;
  name: string;
  slug: string;
  blogs_count?: number;
  created_at: string;
  updated_at: string;
}

export interface Blog {
  id: number;
  category_id?: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  author_name?: string;
  author_image?: string;
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  created_at: string;
  updated_at: string;
  category?: BlogCategory;
  tags?: BlogTag[];
}

export interface BlogsResponse {
  success: boolean;
  data: Blog[];
  meta?: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface BlogResponse {
  success: boolean;
  data: Blog;
}

export interface CategoriesResponse {
  success: boolean;
  data: BlogCategory[];
}

export interface TagsResponse {
  success: boolean;
  data: BlogTag[];
}

export interface BlogFilters {
  category?: string;
  tag?: string;
  search?: string;
  per_page?: number;
  page?: number;
}

const blogService = {
  /**
   * Get all published blogs with pagination and filters
   */
  getAll: async (filters?: BlogFilters): Promise<BlogsResponse> => {
    return api.get('/blogs', { params: filters });
  },

  /**
   * Get a single blog by slug
   */
  getBySlug: async (slug: string): Promise<BlogResponse> => {
    return api.get(`/blogs/${slug}`);
  },

  /**
   * Get all blog categories
   */
  getCategories: async (): Promise<CategoriesResponse> => {
    return api.get('/blog-categories');
  },

  /**
   * Get all blog tags
   */
  getTags: async (): Promise<TagsResponse> => {
    return api.get('/blog-tags');
  },
};

export default blogService;
