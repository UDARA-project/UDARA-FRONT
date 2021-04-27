import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivationUtilisateurComponent } from './reactivation-utilisateur.component';

describe('ReactivationUtilisateurComponent', () => {
  let component: ReactivationUtilisateurComponent;
  let fixture: ComponentFixture<ReactivationUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivationUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivationUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
