import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { EMPTY, catchError, tap } from "rxjs";
import { CoursewareService } from "src/app/services/courseware/courseware.service";
import { Design } from "src/app/utils/interfaces/design";
import { FilterOptions } from "src/app/utils/interfaces/filter";

@Component({
  selector: "app-card-rendering",
  templateUrl: "./card-rendering.component.html",
  styleUrls: ["./card-rendering.component.scss"],
})
export class CardRenderingComponent implements OnInit, OnChanges {
  @Input() filter: FilterOptions = {};
  @Input() listAll = false;

  items: Design[] = [];
  loading = false;

  isMouseDown = false;
  startX = 0;
  scrollLeft = 0;

  constructor(private coursewareService: CoursewareService) {
    if (!Object.getOwnPropertyNames(this.filter).length) {
      this.filter = {
        total_per_page: 10,
        order_orientation: "desc",
      };
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["filter"]) {
      this.getData();
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.scrollEventListener();
    }, 1);
  }

  getData() {
    this.items = [];
    this.loading = true;

    this.coursewareService
      .listAllDesigns(this.filter)
      .pipe(
        tap(({ data }) => {
          this.items = data;
          this.loading = false;
        }),
        catchError(() => {
          this.loading = false;
          return EMPTY;
        })
      )
      .subscribe();
  }

  scrollEventListener() {
    const component = document.getElementById("my-scroll-component");

    if (component) {
      component.addEventListener("mousedown", (e: { pageX: number }) => {
        this.isMouseDown = true;
        this.startX = e.pageX - component.offsetLeft;
        this.scrollLeft = component.scrollLeft;
      });

      component.addEventListener(
        "mousemove",
        (e: { preventDefault: () => void; pageX: number }) => {
          if (!this.isMouseDown) return;
          e.preventDefault();
          const x = e.pageX - component.offsetLeft;
          const walk = (x - this.startX) * 2;
          component.scrollLeft = this.scrollLeft - walk;
        }
      );

      component.addEventListener("mouseup", () => {
        this.isMouseDown = false;
      });
    }
  }
}
