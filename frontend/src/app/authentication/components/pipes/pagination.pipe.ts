import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(items: any[], startPage: number, limitPage: number): any {
    return items.slice((startPage - 1) * limitPage, startPage * limitPage);
  }

}
