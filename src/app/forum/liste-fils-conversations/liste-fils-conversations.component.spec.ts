import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFilsConversationsComponent } from './liste-fils-conversations.component';

describe('ListeFilsConversationsComponent', () => {
  let component: ListeFilsConversationsComponent;
  let fixture: ComponentFixture<ListeFilsConversationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFilsConversationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFilsConversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
