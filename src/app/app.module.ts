import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionManagementPageComponent } from './question-management-page/question-management-page.component';
import { QuestionCreatePageComponent } from './question-create-page/question-create-page.component';
import { QuestionEditPageComponent } from './question-edit-page/question-edit-page.component';
import { QuestionAnswerPageComponent } from './question-answer-page/question-answer-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    QuestionManagementPageComponent,
    QuestionCreatePageComponent,
    QuestionEditPageComponent,
    QuestionAnswerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
