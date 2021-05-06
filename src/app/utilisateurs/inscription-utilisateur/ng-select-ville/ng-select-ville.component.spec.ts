import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectVilleComponent } from './ng-select-ville.component';

describe('NgSelectVilleComponent', () => {
  let component: NgSelectVilleComponent;
  let fixture: ComponentFixture<NgSelectVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSelectVilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
