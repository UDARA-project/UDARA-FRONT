import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilDataComponent } from './accueil-data.component';

describe('AccueilDataComponent', () => {
  let component: AccueilDataComponent;
  let fixture: ComponentFixture<AccueilDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
