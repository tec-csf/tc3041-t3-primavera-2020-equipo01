import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBuisnessesComponent } from './all-buisnesses.component';

describe('AllBuisnessesComponent', () => {
  let component: AllBuisnessesComponent;
  let fixture: ComponentFixture<AllBuisnessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBuisnessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBuisnessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
