import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationUtilisateurComponent } from './authentification-utilisateur.component';

describe('AuthentificationUtilisateurComponent', () => {
  let component: AuthentificationUtilisateurComponent;
  let fixture: ComponentFixture<AuthentificationUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentificationUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
