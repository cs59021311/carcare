import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestInformationComponent } from './service-request-information.component';

describe('ServiceRequestInformationComponent', () => {
  let component: ServiceRequestInformationComponent;
  let fixture: ComponentFixture<ServiceRequestInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRequestInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRequestInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
