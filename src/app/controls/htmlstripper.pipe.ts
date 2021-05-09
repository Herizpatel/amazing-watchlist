import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlstripper'
})
export class HtmlstripperPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/<.*?>/g, '');

  }

}
