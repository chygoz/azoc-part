import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeplanComponent } from './subscribeplan.component';

describe('SubscribeplanComponent', () => {
  let component: SubscribeplanComponent;
  let fixture: ComponentFixture<SubscribeplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
