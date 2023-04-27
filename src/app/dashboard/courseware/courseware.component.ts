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
  };

  startDate = new Date();
  endDate = new Date();
  oneWeek = 7 * 24 * 60 * 60 * 1000; // 1 week in ms

  constructor() {
    this.endDate.setTime(this.startDate.getTime() + this.oneWeek);
  }

  nextWeeks() {
    this.startDate.setTime(this.startDate.getTime() + this.oneWeek);
    this.filterOptions.created_between_start = this.startDate;
    this.endDate.setTime(this.endDate.getTime() + this.oneWeek);
    this.filterOptions.created_between_end = this.endDate;
  }

  previousWeeks() {
    this.startDate.setTime(this.startDate.getTime() - this.oneWeek);
    this.filterOptions.created_between_start = this.startDate;
    this.endDate.setTime(this.endDate.getTime() - this.oneWeek);
    this.filterOptions.created_between_end = this.endDate;
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
