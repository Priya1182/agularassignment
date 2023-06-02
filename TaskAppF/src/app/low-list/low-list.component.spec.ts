import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowListComponent } from './low-list.component';

describe('LowListComponent', () => {
  let component: LowListComponent;
  let fixture: ComponentFixture<LowListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LowListComponent]
    });
    fixture = TestBed.createComponent(LowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
