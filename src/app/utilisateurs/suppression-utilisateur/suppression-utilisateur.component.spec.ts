import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppressionUtilisateurComponent } from './suppression-utilisateur.component';

describe('SuppressionUtilisateurComponent', () => {
  let component: SuppressionUtilisateurComponent;
  let fixture: ComponentFixture<SuppressionUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppressionUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppressionUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
