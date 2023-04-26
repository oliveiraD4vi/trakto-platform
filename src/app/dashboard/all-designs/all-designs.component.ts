import { Component } from "@angular/core";
import { FilterOptions } from "src/app/utils/interfaces/filter";

@Component({
  selector: "app-all-designs",
  templateUrl: "./all-designs.component.html",
  styleUrls: ["./all-designs.component.scss"],
})
export class AllDesignsComponent {
  filterOptions: FilterOptions = {
    total_per_page: 10,
    order_orientation: "desc",
  };
}
