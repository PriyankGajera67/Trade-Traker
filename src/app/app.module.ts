import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ActionsFormService } from './services/actions-form.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionsFormComponent } from './components/actions-form/actions-form.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, ActionsFormComponent],
  providers: [ActionsFormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
