import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: true,
})
export class CountryCodePipe implements PipeTransform {
  transform(value: number, type?: string): unknown {
    if (type === 'IND') return '+91 ' + value;

    return '+01 ' + value;
  }
}
