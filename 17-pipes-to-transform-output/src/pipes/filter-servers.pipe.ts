import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterServers',
  // pure: false
})
export class FilterServersPipe implements PipeTransform {
  transform(servers: any, filterString: string, propertyName: string) {
    const filteredServersArray = [];
    if(servers.length === 0 || filterString === '') {
      return servers;
    }
    for(const server of servers) {
      if(server[propertyName] === filterString) {
        filteredServersArray.push(server);
      }
    }
    return filteredServersArray;
  }
}
