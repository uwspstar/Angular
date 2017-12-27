import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationSetsDetailComponent } from './configuration-sets-detail.component';

describe('ConfigurationSetsDetailComponent', () => {
  let component: ConfigurationSetsDetailComponent;
  let fixture: ComponentFixture<ConfigurationSetsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationSetsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationSetsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
