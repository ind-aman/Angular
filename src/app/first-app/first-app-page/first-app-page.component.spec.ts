import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAppPageComponent } from './first-app-page.component';

describe('FirstAppPageComponent', () => {
  let component: FirstAppPageComponent;
  let fixture: ComponentFixture<FirstAppPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstAppPageComponent]
    });
    fixture = TestBed.createComponent(FirstAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
