import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationPageComponent } from './animation-page.component';

describe('AnimationPageComponent', () => {
  let component: AnimationPageComponent;
  let fixture: ComponentFixture<AnimationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationPageComponent]
    });
    fixture = TestBed.createComponent(AnimationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
