import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingserviceComponent } from './landingservice.component';

describe('LandingserviceComponent', () => {
  let component: LandingserviceComponent;
  let fixture: ComponentFixture<LandingserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
