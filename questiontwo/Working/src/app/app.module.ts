import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { PhonePipe } from './phone.pipe';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    PhonePipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    TextMaskModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
