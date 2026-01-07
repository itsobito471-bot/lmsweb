import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCategoriesComponent } from './learning-categories.component';

describe('LearningCategoriesComponent', () => {
  let component: LearningCategoriesComponent;
  let fixture: ComponentFixture<LearningCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearningCategoriesComponent]
    });
    fixture = TestBed.createComponent(LearningCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
