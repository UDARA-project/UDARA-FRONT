import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprimerRubriqueComponent } from './suprimer-rubrique.component';

describe('SuprimerRubriqueComponent', () => {
  let component: SuprimerRubriqueComponent;
  let fixture: ComponentFixture<SuprimerRubriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuprimerRubriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuprimerRubriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
