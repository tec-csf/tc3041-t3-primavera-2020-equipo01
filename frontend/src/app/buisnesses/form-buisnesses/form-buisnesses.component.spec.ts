import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuisnessesComponent } from './form-buisnesses.component';

describe('FormBuisnessesComponent', () => {
  let component: FormBuisnessesComponent;
  let fixture: ComponentFixture<FormBuisnessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuisnessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuisnessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
