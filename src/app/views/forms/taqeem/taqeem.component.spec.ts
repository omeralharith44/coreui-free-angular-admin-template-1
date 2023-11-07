/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaqeemComponent } from './taqeem.component';

describe('TaqeemComponent', () => {
  let component: TaqeemComponent;
  let fixture: ComponentFixture<TaqeemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaqeemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaqeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
