export interface FilterOptions {
  total_per_page?: number;
  order_orientation?: "asc" | "desc";
  created_between_start?: Date;
  created_between_end?: Date;
  nextCursor?: string;
  previousCursor?: string;
  updated_between_start?: Date;
  updated_between_end?: Date;
}
