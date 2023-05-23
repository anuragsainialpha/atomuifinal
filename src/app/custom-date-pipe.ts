import { Pipe, PipeTransform } from '@angular/core';
/*
 * Formats a /Date(XXXXXXXXXXXXXXXX)/ string into a JSON Date object
 * Takes an argument as input of actual date value in /Date(XXXXXXXXXXXXXXXX)/ format.
 * Usage:
 * date-value | customDateFormat
 * Example:
 * {{ '/Date(1402034400000)/' | customDateFormat}}
 * formats to: "2014-06-06T06:00:00.000Z" 
*/
@Pipe({ name: "customDateFormat", pure: true })
export class CustomDateFormat implements PipeTransform {
  transform(
    value: any,
    valuesplitindexvalues: string,
    finalDate: string
  ): number {
    if (value) {
      valuesplitindexvalues = value.split("/");
      finalDate =
        valuesplitindexvalues[1] +
        "/" +
        valuesplitindexvalues[0] +
        "/" +
        valuesplitindexvalues[2];
      console.log(valuesplitindexvalues);
      console.log(finalDate);
    }

    if (finalDate) {
      var myDate = new Date(finalDate).getTime();
      return myDate;
    }
    console.log(finalDate);
    
  }
}