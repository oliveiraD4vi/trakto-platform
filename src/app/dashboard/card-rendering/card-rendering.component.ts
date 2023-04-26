import { Component, Input, OnInit } from "@angular/core";
import { EMPTY, catchError, tap } from "rxjs";
import { CoursewareService } from "src/app/services/courseware/courseware.service";
import { Design } from "src/app/utils/interfaces/design";
import { FilterOptions } from "src/app/utils/interfaces/filter";

@Component({
  selector: "app-card-rendering",
  templateUrl: "./card-rendering.component.html",
  styleUrls: ["./card-rendering.component.scss"],
})
export class CardRenderingComponent implements OnInit {
  @Input() filter: FilterOptions = {};

  items: Design[] = [];
  hasNextPage = false;
  hasPreviousPage = false;

  constructor(private coursewareService: CoursewareService) {
    if (!Object.getOwnPropertyNames(this.filter).length) {
      this.filter = {
        total_per_page: 10,
        order_orientation: "desc",
      };
    }
  }

  ngOnInit() {
    this.coursewareService
      .listAllDesigns(this.filter)
      .pipe(
        tap(({ data, hasNextPage, hasPreviousPage }) => {
          this.items = data;
          (this.hasNextPage = hasNextPage),
            (this.hasPreviousPage = hasPreviousPage);
        }),
        catchError(() => {
          return EMPTY;
        })
      )
      .subscribe();
  }
}
