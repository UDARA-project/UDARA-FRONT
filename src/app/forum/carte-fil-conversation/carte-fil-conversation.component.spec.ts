import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteFilConversationComponent } from './carte-fil-conversation.component';

describe('CarteFilConversationComponent', () => {
  let component: CarteFilConversationComponent;
  let fixture: ComponentFixture<CarteFilConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteFilConversationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteFilConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
