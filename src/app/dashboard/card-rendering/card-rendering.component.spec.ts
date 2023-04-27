import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CardRenderingComponent } from "./card-rendering.component";

describe("CardRenderingComponent", () => {
  let component: CardRenderingComponent;
  let fixture: ComponentFixture<CardRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRenderingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
