import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProgressSpinnerModuleComponent } from './mat-progress-spinner-module.component';

describe('MatProgressSpinnerModuleComponent', () => {
  let component: MatProgressSpinnerModuleComponent;
  let fixture: ComponentFixture<MatProgressSpinnerModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatProgressSpinnerModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatProgressSpinnerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
