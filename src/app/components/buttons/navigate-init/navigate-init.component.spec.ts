import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateInitComponent } from './navigate-init.component';

describe('NavigateInitComponent', () => {
  let component: NavigateInitComponent;
  let fixture: ComponentFixture<NavigateInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigateInitComponent]
    });
    fixture = TestBed.createComponent(NavigateInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
