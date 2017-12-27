import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationSetsComponent } from './configuration-sets.component';

describe('ConfigurationSetsComponent', () => {
  let component: ConfigurationSetsComponent;
  let fixture: ComponentFixture<ConfigurationSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
