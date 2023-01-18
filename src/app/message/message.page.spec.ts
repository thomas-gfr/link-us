import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessagePage } from './message.page';


describe('Tab1Page', () => {
  let component: MessagePage;
  let fixture: ComponentFixture<MessagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(MessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
