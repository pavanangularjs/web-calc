/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NetComponent } from './net.component';

describe('NetComponent', () => {
  let component: NetComponent;
  let fixture: ComponentFixture<NetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
