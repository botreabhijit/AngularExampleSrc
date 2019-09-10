import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'AbcPipe'
})
export class AbcPipePipe implements PipeTransform {

  transform(value: any, ...args): any 
  {
    let str = value;

    if(args[0] == "Abc")
    {
      str += "Educating for better tomorrow" 
    }
    return str;
  }

}
