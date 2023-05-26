import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFormsComponent } from './js-forms.component';

describe('JsFormsComponent', () => {
  let component: JsFormsComponent;
  let fixture: ComponentFixture<JsFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsFormsComponent]
    });
    fixture = TestBed.createComponent(JsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
