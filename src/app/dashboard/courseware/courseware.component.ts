import { Component } from "@angular/core";
import { FilterOptions } from "src/app/utils/interfaces/filter";

@Component({
  selector: "app-courseware",
  templateUrl: "./courseware.component.html",
  styleUrls: ["./courseware.component.scss"],
})
export class CoursewareComponent {
  filterOptions: FilterOptions = {
    total_per_page: 10,
    order_orientation: "desc",
    created_between_start: new Date(2023, 3, 23, 0, 0, 0, 0),
    created_between_end: new Date(2023, 3, 30, 23, 59, 59, 999),
  };

  startDate = new Date(2023, 3, 23, 0, 0, 0, 0);
  endDate = new Date(2023, 3, 30, 23, 59, 59, 999);
  oneWeek = 7 * 24 * 60 * 60 * 1000; // 1 week in ms

  nextWeeks() {
    this.startDate.setTime(this.startDate.getTime() + this.oneWeek);
    this.endDate.setTime(this.endDate.getTime() + this.oneWeek);

    this.filterOptions = {
      ...this.filterOptions,
      created_between_start: this.startDate,
      created_between_end: this.endDate,
    };
  }

  previousWeeks() {
    this.startDate.setTime(this.startDate.getTime() - this.oneWeek);
    this.endDate.setTime(this.endDate.getTime() - this.oneWeek);

    this.filterOptions = {
      ...this.filterOptions,
      created_between_start: this.startDate,
      created_between_end: this.endDate,
    };
  }

  formatDate(date: Date): string {
    const formattedDate = date.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
    });
    const [day, month] = formattedDate.split("/");
    return `${month}/${day}`;
  }
}
