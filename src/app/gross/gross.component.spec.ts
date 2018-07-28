/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrossComponent } from './gross.component';

describe('GrossComponent', () => {
  let component: GrossComponent;
  let fixture: ComponentFixture<GrossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
