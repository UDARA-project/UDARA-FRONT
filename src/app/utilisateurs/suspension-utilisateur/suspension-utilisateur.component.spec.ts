import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspensionUtilisateurComponent } from './suspension-utilisateur.component';

describe('SuspensionUtilisateurComponent', () => {
  let component: SuspensionUtilisateurComponent;
  let fixture: ComponentFixture<SuspensionUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspensionUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspensionUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
