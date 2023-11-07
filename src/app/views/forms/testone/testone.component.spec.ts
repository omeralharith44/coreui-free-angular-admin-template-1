/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestoneComponent } from './testone.component';

describe('TestoneComponent', () => {
  let component: TestoneComponent;
  let fixture: ComponentFixture<TestoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
