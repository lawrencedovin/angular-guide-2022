import { Pipe, PipeTransform } from '@angular/core';

interface Server {
  instanceType: string
  name: string
  status: string
  started: Date
}

@Pipe({
  name: 'sortServersByName'
})
export class SortServersByNamePipe implements PipeTransform {
  transform(servers: Array<Server>): Array<Server> {
    return servers.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }
}
