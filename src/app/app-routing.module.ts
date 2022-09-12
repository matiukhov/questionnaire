import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionAnswerPageComponent } from './question-answer-page/question-answer-page.component';
import { QuestionCreatePageComponent } from './question-create-page/question-create-page.component';
import { QuestionEditPageComponent } from './question-edit-page/question-edit-page.component';
import { QuestionManagementPageComponent } from './question-management-page/question-management-page.component';

const routes: Routes = [
  { path: '', component: QuestionManagementPageComponent },
  { path: 'create', component: QuestionCreatePageComponent },
  { path: 'edit', component: QuestionEditPageComponent },
  { path: 'answer', component: QuestionAnswerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
