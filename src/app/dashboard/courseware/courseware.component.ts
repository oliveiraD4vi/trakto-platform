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
}
