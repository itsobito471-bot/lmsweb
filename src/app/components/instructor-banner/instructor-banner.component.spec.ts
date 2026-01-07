import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorBannerComponent } from './instructor-banner.component';

describe('InstructorBannerComponent', () => {
  let component: InstructorBannerComponent;
  let fixture: ComponentFixture<InstructorBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorBannerComponent]
    });
    fixture = TestBed.createComponent(InstructorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
