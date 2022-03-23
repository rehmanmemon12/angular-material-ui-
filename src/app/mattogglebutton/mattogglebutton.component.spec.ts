import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattogglebuttonComponent } from './mattogglebutton.component';

describe('MattogglebuttonComponent', () => {
  let component: MattogglebuttonComponent;
  let fixture: ComponentFixture<MattogglebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MattogglebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MattogglebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
