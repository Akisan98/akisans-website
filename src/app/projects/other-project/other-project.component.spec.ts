import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProjectComponent } from './other-project.component';

describe('OtherProjectComponent', () => {
  let component: OtherProjectComponent;
  let fixture: ComponentFixture<OtherProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
