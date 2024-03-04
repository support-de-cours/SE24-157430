import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'd'
})
export class DPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
