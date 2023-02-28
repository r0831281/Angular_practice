import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstWord'
})
export class CapitalizeFirstWordPipe implements PipeTransform {

  transform(value: string): string {
    //find first word in value
    let firstWord = value.slice(0, value.indexOf(" "));
    //capitalize first word
    return firstWord.toUpperCase() + value.slice(value.indexOf(" "));
  }
}
