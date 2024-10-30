import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformador',
  standalone: true
})
export class TransformadorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Pokemon " + value;
  }

}
