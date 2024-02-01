import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPromiseComponent } from './cat-promise.component';

describe('CatPromiseComponent', () => {
  let component: CatPromiseComponent;
  let fixture: ComponentFixture<CatPromiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatPromiseComponent]
    });
    fixture = TestBed.createComponent(CatPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
