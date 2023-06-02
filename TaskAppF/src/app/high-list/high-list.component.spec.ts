import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighListComponent } from './high-list.component';

describe('HighListComponent', () => {
  let component: HighListComponent;
  let fixture: ComponentFixture<HighListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighListComponent]
    });
    fixture = TestBed.createComponent(HighListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
