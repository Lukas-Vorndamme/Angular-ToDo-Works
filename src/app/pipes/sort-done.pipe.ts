import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../model/ToDo';

@Pipe({
  name: 'sortDone'
})
export class SortDonePipe implements PipeTransform {

  todo : ToDo;
  
  transform(value: any, args?: any): any {
  
    value.sort((a: any, b: any) => {

      if (a.done === true && b.done === false) {
      
      return 1;
      
      } else if (a.done === false && b.done === true) {
      
      return -1;
      
      } else {
      
      return 0;
      
      }
      
      });
      
      return value;
      
      }
  }
