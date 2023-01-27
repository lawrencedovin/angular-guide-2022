import { Pipe, PipeTransform } from '@angular/core';

interface Server {
  instanceType: string
  name: string
  status: string
  started: Date
}

@Pipe({
  name: 'sortServers'
})
export class SortServersPipe implements PipeTransform {
  transform(servers: Array<Server>, propertyName: string): Array<Server> {
    return servers.sort((a: any, b: any) => (a[propertyName] > b[propertyName]) ? 1 : -1);
  }
}
