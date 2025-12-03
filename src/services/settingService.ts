import api from './api';

export interface Setting {
  id: number;
  key: string;
  value: string | null;
  type: 'text' | 'json' | 'boolean';
  group: string;
  created_at: string;
  updated_at: string;
}

export interface SettingsResponse {
  success: boolean;
  data: Setting[];
}

const settingService = {
  /**
   * Get all settings
   * @param group - Optional group filter (e.g., 'general', 'contact', 'social')
   */
  getAll: async (group?: string): Promise<SettingsResponse> => {
    const params = group ? { group } : {};
    return api.get('/settings', { params });
  },

  /**
   * Get settings as a key-value object
   */
  getAllAsObject: async (group?: string): Promise<Record<string, any>> => {
    const response: SettingsResponse = await settingService.getAll(group);
    const settings: Record<string, any> = {};

    response.data.forEach((setting) => {
      let value: any = setting.value;

      // Parse based on type
      if (setting.type === 'json' && value) {
        try {
          value = JSON.parse(value);
        } catch {
          value = setting.value;
        }
      } else if (setting.type === 'boolean') {
        value = value === 'true' || value === '1';
      }

      settings[setting.key] = value;
    });

    return settings;
  },
};

export default settingService;
