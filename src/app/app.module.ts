import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HtmlFormsComponent } from './components/html-forms/html-forms.component';
import { JsFormsComponent } from './components/js-forms/js-forms.component';
import { NgModelFormComponent } from './components/ng-model-form/ng-model-form.component';
import { ReactiveFormComponent } from "./components/reactive-form/reactive-form.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HtmlFormsComponent,
        JsFormsComponent,
        MatFormFieldModule,
        MatSelectModule,
        NgModelFormComponent,
        ReactiveFormComponent
    ]
})
export class AppModule { }
