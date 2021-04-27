import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFilConversationComponent } from './ajout-fil-conversation.component';

describe('AjoutFilConversationComponent', () => {
  let component: AjoutFilConversationComponent;
  let fixture: ComponentFixture<AjoutFilConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFilConversationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFilConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
