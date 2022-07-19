import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrechargehistoryComponent } from './viewrechargehistory.component';

describe('ViewrechargehistoryComponent', () => {
  let component: ViewrechargehistoryComponent;
  let fixture: ComponentFixture<ViewrechargehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrechargehistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrechargehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
