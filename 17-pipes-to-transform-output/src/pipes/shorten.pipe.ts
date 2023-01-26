import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: string): string {
    return value.length > 17 ? value.substring(0, 17) + ' ...' : value;
  }
}
