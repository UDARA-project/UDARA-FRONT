import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuFilConversationComponent } from './contenu-fil-conversation.component';

describe('ContenuFilConversationComponent', () => {
  let component: ContenuFilConversationComponent;
  let fixture: ComponentFixture<ContenuFilConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenuFilConversationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenuFilConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
