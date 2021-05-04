import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRubriqueComponent } from './liste-rubrique.component';

describe('ListeRubriqueComponent', () => {
  let component: ListeRubriqueComponent;
  let fixture: ComponentFixture<ListeRubriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRubriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRubriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
