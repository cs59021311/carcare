import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageServiceRequestsComponent } from './manage-service-requests.component';

describe('ManageServiceRequestsComponent', () => {
  let component: ManageServiceRequestsComponent;
  let fixture: ComponentFixture<ManageServiceRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageServiceRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageServiceRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
