import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underscoreToSpace',
})
export class UnderscoreToSpacePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\_/g, ' ');
  }
}
