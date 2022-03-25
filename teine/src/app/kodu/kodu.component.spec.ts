import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoduComponent } from './kodu.component';

describe('KoduComponent', () => {
  let component: KoduComponent;
  let fixture: ComponentFixture<KoduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
