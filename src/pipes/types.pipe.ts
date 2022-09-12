import { Pipe, PipeTransform } from '@angular/core';
import { eQuestionTypes } from 'src/classes/types';

@Pipe({
  name: 'eQuestionTypesPipe'
})

export class eQuestionTypesPipe implements PipeTransform {
    transform(value: number): string {
        return eQuestionTypes[value];
    }
}