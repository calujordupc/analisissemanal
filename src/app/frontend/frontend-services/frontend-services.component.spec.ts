import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendServicesComponent } from './frontend-services.component';

describe('FrontendServicesComponent', () => {
  let component: FrontendServicesComponent;
  let fixture: ComponentFixture<FrontendServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
