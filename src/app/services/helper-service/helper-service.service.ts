import { ApiserviceService } from './../api/apiservice.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {

  constructor(
    private toastr:ToastrService,
    private service:ApiserviceService
  ) { }

  getTodayDate(){
   return moment(new Date()).format('DD/MM/YYYY');
  }
  getTodayDateASString(){
    return new Date().toISOString();
  }

  alphaNumericOnly(e){
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
  }

  numericOnly(e){
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
  }

  getDestinationDescList(destId):any{
    console.log(destId);
    this.service.get_service(ApiserviceService.apisList.getDestinationDescriptionDataList+destId).subscribe(async response=>{
      await response;
      if(response['statusCode'] == 200) {
        if(response['data']){
          return response['data'].searchResult;
         //  this.getDestinationDescList = response['data'].searchResult;
        }
      }
    },error=>{
    })
  }

  getDateValidations(gatInFrDate,gateIntoDate,gateOutFrDate,gateoutToDate,reportFrDate,reportToDate){
    let gateInDateValid = true;
    let gateOutDateValid = true;
    let reportDateValid = true;
    if((gatInFrDate) && (gateIntoDate == "" || gateIntoDate == null || gateIntoDate == undefined)){
      gateInDateValid = false;
      this.toastr.error('Please give Gate In To Date')
    }
    if((gateOutFrDate) && (gateoutToDate == "" || gateoutToDate == null || gateoutToDate == undefined)){
      gateOutDateValid = false
      this.toastr.error('Please give Gate Out To Date')
    }
    if((reportFrDate) && (reportToDate == "" || reportToDate == null || reportToDate == undefined)){
      reportDateValid = false
      this.toastr.error('Please give Report To Date')
    }
    return (gateInDateValid && gateOutDateValid && reportDateValid)
  }
  
}
