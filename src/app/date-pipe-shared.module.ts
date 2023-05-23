import { NgModule} from '@angular/core';
import { CustomDateFormat } from './custom-date-pipe';


@NgModule({
  imports: [
   
  ],
  declarations: [
    CustomDateFormat
  ],
  exports:[
    CustomDateFormat
  ]
})

export class CustomDatePipeModule { }
