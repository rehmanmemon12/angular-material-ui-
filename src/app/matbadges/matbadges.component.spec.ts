import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbadgesComponent } from './matbadges.component';

describe('MatbadgesComponent', () => {
  let component: MatbadgesComponent;
  let fixture: ComponentFixture<MatbadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatbadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
