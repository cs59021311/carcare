import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseServicesComponent } from './use-services.component';

describe('UseServicesComponent', () => {
  let component: UseServicesComponent;
  let fixture: ComponentFixture<UseServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
