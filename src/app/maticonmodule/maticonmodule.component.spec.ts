import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaticonmoduleComponent } from './maticonmodule.component';

describe('MaticonmoduleComponent', () => {
  let component: MaticonmoduleComponent;
  let fixture: ComponentFixture<MaticonmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaticonmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaticonmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
