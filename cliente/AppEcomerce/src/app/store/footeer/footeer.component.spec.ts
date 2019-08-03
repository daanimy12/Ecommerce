import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteerComponent } from './footeer.component';

describe('FooteerComponent', () => {
  let component: FooteerComponent;
  let fixture: ComponentFixture<FooteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
