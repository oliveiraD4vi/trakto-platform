import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "src/app/utils/interfaces/user";

const USER_DATA_KEY = "USER_DATA";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private userDataSubject = new BehaviorSubject<User | null>(null);
  userData$: Observable<User | null> = this.userDataSubject.asObservable();

  getUserData(): User | null {
    const userDataJson = localStorage.getItem(USER_DATA_KEY);
    return userDataJson ? JSON.parse(userDataJson) : null;
  }

  setUserData(userData: User): void {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
    this.userDataSubject.next(userData);
  }

  clearUserData() {
    localStorage.removeItem(USER_DATA_KEY);
  }
}
