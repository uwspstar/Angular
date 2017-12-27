import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationSetsNewComponent } from './configuration-sets-new.component';

describe('ConfigurationSetsNewComponent', () => {
  let component: ConfigurationSetsNewComponent;
  let fixture: ComponentFixture<ConfigurationSetsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationSetsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationSetsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
