import { Injectable } from "@angular/core";
import { FilterOptions } from "src/app/utils/interfaces/filter";

@Injectable({
  providedIn: "root",
})
export class FilterService {
  buildFilter(options: FilterOptions): string {
    const filterParams: string[] = [];

    if (options.total_per_page) {
      filterParams.push(`total_per_page=${options.total_per_page}`);
    }

    if (options.order_orientation) {
      filterParams.push(`order_orientation=${options.order_orientation}`);
    }

    if (options.created_between_start) {
      filterParams.push(
        `created_between_start=${options.created_between_start.toISOString()}`
      );
    }

    if (options.created_between_end) {
      filterParams.push(
        `created_between_end=${options.created_between_end.toISOString()}`
      );
    }

    if (options.nextCursor) {
      filterParams.push(`nextCursor=${options.nextCursor}`);
    }

    if (options.previousCursor) {
      filterParams.push(`previousCursor=${options.previousCursor}`);
    }

    if (options.updated_between_start) {
      filterParams.push(
        `updated_between_start=${options.updated_between_start.toISOString()}`
      );
    }

    if (options.updated_between_end) {
      filterParams.push(
        `updated_between_end=${options.updated_between_end.toISOString()}`
      );
    }

    return filterParams.join("&");
  }
}
