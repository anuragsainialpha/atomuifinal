import { InvoiceData } from './../../models/InvoiceData';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiserviceService } from './../../services/api/apiservice.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
declare var $: any;


@Component({
  selector: 'app-load-slip-view',
  templateUrl: './load-slip-view.component.html',
  styles: []
})
export class LoadSlipViewComponent implements OnInit {
  isLoading: boolean = false;
  invoiceData = new Array<InvoiceData>();
  totalTTESelected: number;
  totalTruckVolume: number;
  totalTyres: number;
  totalTubes: number;
  totalFlaps: number;
  totalValves: number;
  ShipTo: string;
  destination: string;
  truckType: string;
  totalMaterialWeight: number;
  userSource: string;
  totalPctr: number;
  loadslipID: string;
  bayArrivedDate: any;
  loadingStartDate: any;
  loadingEndDate: any;
  confirmedDate: any;
  releasedDate: any;
  lsPrintDate: any;
  totalWeight:number;
  totalQty:any;
  otherQty:any;
  shipmentNumber: any;
  bay: any;
  totalLoadedQty: any;
  loadslipCategory: any;
  marketSegmentMap: any;
  roles: any;
  itemLevelTotalTTE: any;
  itemLevelTotalWeight: any;
  itemLevelTotalVolume: any;
  sendForBarcodeDate: string;
  dropSeq: string;
  freightAvailableflag: string;
  multistopTruckNumber: string;
  variant_ONE: string;
  actualTruckType: string;
  truckT: string;
  transporter: string;
  truckIndentCategory:string;
  fullTruckNumCat:string;
  tteQty:any;
  stoso:any;
  description: any;
  city:any;
  constructor(
    public service: ApiserviceService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private location: Location
  ) {
    this.loadslipID = this.ActivatedRoute.snapshot.params['loadslipId'];
   }

  ngOnInit() {
    if(this.loadslipID){
      this.getLoadslipDataById(this.loadslipID);
    }
  }

  horizontalScroll(){
    let width = $(window).width();
    if(width < 1280) {
      return true;
    }
    return false;
}

  getLoadslipDataById(loadSlipId){
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getInvoiceDetailsById + loadSlipId).subscribe(response => {
      this.isLoading = false;
      if (response['statusCode'] == 200) {
        let responseData = response['data'];
        this.invoiceData = responseData.invoiceDataDtos;
        this.userSource = responseData.loadslipDraftDto.source;
        this.destination = responseData.loadslipDraftDto.destination;
        this.description = responseData.loadslipDraftDto.description;
        this.truckType = responseData.loadslipDraftDto.truckType;
        this.truckT = responseData.loadslipDraftDto.truckNumber;
        this.transporter = responseData.loadslipDraftDto.servprov;
        this.ShipTo = responseData.loadslipDraftDto.shipTo;
        this.actualTruckType = responseData.loadslipDraftDto.actualTruckType;
        this.variant_ONE = responseData.loadslipDraftDto.variant1;
        this.freightAvailableflag = responseData.loadslipDraftDto.freightAvailableflag;
        this.shipmentNumber = responseData.loadslipDraftDto.shipmentID;
        this.loadslipID = responseData.loadslipDraftDto.loadSlipId;
        this.totalTTESelected = responseData.loadslipDraftDto.tteUtil;
        this.totalMaterialWeight = responseData.loadslipDraftDto.weightUtil;
        this.totalTruckVolume = responseData.loadslipDraftDto.volumeUtil;
        this.totalTyres = responseData.loadslipDraftDto.totalTyres;
        this.totalTubes = responseData.loadslipDraftDto.totalTubes;
        this.totalFlaps = responseData.loadslipDraftDto.totalFlaps;
        this.totalValves = responseData.loadslipDraftDto.totalValves;
        this.totalPctr = responseData.loadslipDraftDto.totPctr;
        this.dropSeq = responseData.loadslipDraftDto.dropSeq;
        this.loadslipCategory = responseData.loadslipDraftDto.loadslipCategory;
        this.bayArrivedDate = responseData.loadslipDraftDto.bayArrivedDate;
        this.lsPrintDate = responseData.loadslipDraftDto.lsPrintDate;
        this.sendForBarcodeDate = responseData.loadslipDraftDto.sendForBarcodeDate;
        this.loadingStartDate = responseData.loadslipDraftDto.loadingStartDate;
        this.loadingEndDate = responseData.loadslipDraftDto.loadingEndDate;
        this.stoso = responseData.loadslipDraftDto.sostoNumberVal;
        this.tteQty = responseData.loadslipDraftDto.totalTTE;
        this.totalQty = responseData.loadslipDraftDto.totQty;
        this.otherQty = responseData.loadslipDraftDto.otherQty;
        this.releasedDate = responseData.loadslipDraftDto.releasedDate;
        this.confirmedDate = responseData.loadslipDraftDto.confirmedDate;
        this.truckIndentCategory = responseData.loadslipDraftDto.truckIndentCategory;
        this.city = responseData.loadslipDraftDto.city;
        this.totalWeight = responseData.loadslipDraftDto.totalWeight;

        this.fullTruckNumCat = this.truckIndentCategory ? this.truckT + ' - ('+this.truckIndentCategory+')' : this.truckT;

      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong")
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })

  }

  locationBack(){
    this.location.back();
  }

    // Print Excel
    export(): void {
      this.isLoading = true;
      this.service.get_service_DownLoadExcel(ApiserviceService.apisList.printLoadslip + '?loadslipId=' + this.loadslipID + '&excel=' + true).subscribe(response => {
        if (response) {
          // Uncomment when export excel is generated in backend
          var blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          // var filename = 'LoadslipDetails.xlsx';
          var filename = this.loadslipID+'.xlsx';
          const link = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          document.body.appendChild(a);
          a.setAttribute('style', 'display: none');
          a.href = link;
          a.download = filename
          a.click();
          window.URL.revokeObjectURL(link);
          a.remove();
          this.isLoading = false;
        } else {
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
          this.isLoading = false;
        }
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
  
    }

}
