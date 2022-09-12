import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionManagementPageComponent } from './question-management-page/question-management-page.component';
import { QuestionCreatePageComponent } from './question-create-page/question-create-page.component';
import { QuestionEditPageComponent } from './question-edit-page/question-edit-page.component';
import { QuestionAnswerPageComponent } from './question-answer-page/question-answer-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FlexLayoutModule } from '@angular/flex-layout';
import { eQuestionTypesPipe } from 'src/pipes/types.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuestionManagementPageComponent,
    QuestionCreatePageComponent,
    QuestionEditPageComponent,
    QuestionAnswerPageComponent,
    eQuestionTypesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  exports: [eQuestionTypesPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
