import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlFormsComponent } from './html-forms.component';

describe('HtmlFormsComponent', () => {
  let component: HtmlFormsComponent;
  let fixture: ComponentFixture<HtmlFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HtmlFormsComponent]
    });
    fixture = TestBed.createComponent(HtmlFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
