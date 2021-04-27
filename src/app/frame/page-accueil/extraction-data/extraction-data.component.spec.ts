import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionDataComponent } from './extraction-data.component';

describe('ExtractionDataComponent', () => {
  let component: ExtractionDataComponent;
  let fixture: ComponentFixture<ExtractionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
