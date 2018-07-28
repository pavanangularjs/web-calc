import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossIncTestComponent } from './gross-inc-test.component';

describe('GrossIncTestComponent', () => {
  let component: GrossIncTestComponent;
  let fixture: ComponentFixture<GrossIncTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrossIncTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossIncTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
