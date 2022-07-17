import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargedoneComponent } from './rechargedone.component';

describe('RechargedoneComponent', () => {
  let component: RechargedoneComponent;
  let fixture: ComponentFixture<RechargedoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargedoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargedoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
