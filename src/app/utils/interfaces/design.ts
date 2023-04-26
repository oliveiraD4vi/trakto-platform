interface AppReference {
  id: string;
}

interface Cover {
  raw: string;
  medium: string;
  high: string;
  low: string;
}

interface Product {
  app_product_reference: object;
  created_at: object;
}

interface Thumb {
  raw: string;
  medium: string;
  high: string;
  low: string;
}

interface ThemeReference {
  id: string;
}

export interface Design {
  app_reference: AppReference;
  cover: Cover;
  created_at: string;
  id: string;
  is_deleted: boolean;
  is_premium: boolean;
  is_renamed: boolean;
  is_template: boolean;
  products: Product[];
  tags: string[];
  theme_reference: ThemeReference;
  thumbs: Thumb;
  title: string;
  updated_at: string;
  user_reference: { id: string };
}
