import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagereFundsComponent } from './managere-funds.component';

describe('ManagereFundsComponent', () => {
  let component: ManagereFundsComponent;
  let fixture: ComponentFixture<ManagereFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagereFundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagereFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
