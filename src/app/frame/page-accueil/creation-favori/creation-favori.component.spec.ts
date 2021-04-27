import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationFavoriComponent } from './creation-favori.component';

describe('CreationFavoriComponent', () => {
  let component: CreationFavoriComponent;
  let fixture: ComponentFixture<CreationFavoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationFavoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationFavoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
