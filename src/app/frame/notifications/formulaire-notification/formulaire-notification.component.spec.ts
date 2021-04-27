import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireNotificationComponent } from './formulaire-notification.component';

describe('FormulaireNotificationComponent', () => {
  let component: FormulaireNotificationComponent;
  let fixture: ComponentFixture<FormulaireNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
