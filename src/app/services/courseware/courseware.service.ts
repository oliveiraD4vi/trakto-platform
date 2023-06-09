import { CookiesService } from "../cookies/cookies.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { URL } from "src/app/utils/constants/constants";
import { FilterOptions } from "src/app/utils/interfaces/filter";
import { FilterService } from "../filter/filter.service";
import { Response } from "src/app/utils/interfaces/response";

@Injectable({
  providedIn: "root",
})
export class CoursewareService {
  constructor(
    private cookiesService: CookiesService,
    private filterService: FilterService,
    private http: HttpClient
  ) {}

  listAllDesigns(filterOptions: FilterOptions): Observable<Response> {
    const filter = this.filterService.buildFilter(filterOptions);

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.cookiesService.getToken()}`,
    });

    return this.http.get<Response>(`${URL.API_URL}/document?${filter}`, {
      headers,
    });
  }
}
