import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderDesktopComponent } from './nav-header-desktop.component';

describe('NavHeaderDesktopComponent', () => {
  let component: NavHeaderDesktopComponent;
  let fixture: ComponentFixture<NavHeaderDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavHeaderDesktopComponent]
    });
    fixture = TestBed.createComponent(NavHeaderDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
