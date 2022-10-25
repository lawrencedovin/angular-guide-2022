import { Pipe } from "@angular/core";

@Pipe({
  name: 'reverse'
})
export class ReversePipe {
  transform(value: string) {
    // split the string into individual characters
    // reverse the characters
    // join back the characters into a string
    // with nothing in between joining them.
    return value.split("").reverse().join("");
  }
}
