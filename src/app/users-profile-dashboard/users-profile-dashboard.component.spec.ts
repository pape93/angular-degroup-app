import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersProfileDashboardComponent } from './users-profile-dashboard.component';

describe('UsersProfileDashboardComponent', () => {
  let component: UsersProfileDashboardComponent;
  let fixture: ComponentFixture<UsersProfileDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersProfileDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersProfileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
