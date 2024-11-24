import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentsByResidenceComponent } from './appartments-by-residence.component';

describe('AppartmentsByResidenceComponent', () => {
  let component: AppartmentsByResidenceComponent;
  let fixture: ComponentFixture<AppartmentsByResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppartmentsByResidenceComponent]
    });
    fixture = TestBed.createComponent(AppartmentsByResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
