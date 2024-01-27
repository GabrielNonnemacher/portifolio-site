import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderMobileComponent } from './nav-header-mobile.component';

describe('NavHeaderMobileComponent', () => {
  let component: NavHeaderMobileComponent;
  let fixture: ComponentFixture<NavHeaderMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavHeaderMobileComponent]
    });
    fixture = TestBed.createComponent(NavHeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
