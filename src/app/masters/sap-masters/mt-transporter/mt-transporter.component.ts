import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;


@Component({
  selector: 'app-mt-transporter',
  templateUrl: './mt-transporter.component.html',
  styleUrls: ['./mt-transporter.component.scss']
})
export class MtTransporterComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;

  salesSku: any = "";
  compQty: any = "";
  itemSeq: any = "";
  oeCode: any = "";

  itemIdf: any = "";
  itemDescriptionf: any = "";
  itemCategoryf: any = "";
  batchCodef: any = "";

  itemId: any = "";
  itemDescription: any = "";
  itemCategory: any = "";
  batchCode: any = "";

  transporterIditemIdu: any = "";
  itemDescriptionu: any = "";
  itemCategoryu: any = "";
  batchCodeu: any = "";

  insertUser: any = "";
  insertDate: any = "";
  updateUser: any = "";
  updateDate: any = "";

  transporterId: any = "";
  transporterDesc: any = "";
  servprov: any = "";
  transporterAddress: any = "";
  city: any = "";
  state: any = "";
  postalCode: any = "";
  country: any = "";
  isActive: any = "";
  IndustryKey: any = "";
  stateCode: any = "";
  gstNo: any = "";
  gstState: any = "";
  panNo: any = "";


  transporterIdu: any = "";
  transporterDescu: any = "";
  servprovu: any = "";
  transporterAddressu: any = "";
  cityu: any = "";
  stateu: any = "";
  postalCodeu: any = "";
  countryu: any = "";
  isActiveu: any = "";
  IndustryKeyu: any = "";
  stateCodeu: any = "";
  gstNou: any = "";
  gstStateu: any = "";
  panNou: any = "";



  Insert_User
  Insert_Date
  Update_User
  Update_Date



  itemClassification: any = "";
  itemType: any = "";
  itemGroup: any = "";
  tte: any = "";
  loadFactor: any = "";
  formattedDate: string;
  effectiveDate: any = "";

  displayForm: boolean = false;
  resultDataList: any[];
  responseItemsList: any[];
  serveProsList: any[];

  editing = {};

  page = {
    limit: 100,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };




  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "sap-master");
    this.getServpros();
  }

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }

  // For Pagination Footer
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }

  displayAddForm() {
    if (this.displayForm)
      this.displayForm = false;
    else
      this.displayForm = true;
  }


  mtOEBOMList: any[];
  mtoebomList: any[];

  upload() { }


  doSubmitSearch() {
    let data = {
      transporterId: this.transporterId,
      transporterDesc: this.transporterDesc,
      servprov: this.servprov,
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.doSearch(data);
  }


  doSearch(data) {
    console.log("submit data:  " + JSON.stringify(data));
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getMtTransporter, data).subscribe(response => {
      this.page.count = response['data'].total;
      this.page.limit = response['data'].pageLength;
      this.responseItemsList = response['data'].itemsList;
      console.log("response length: " + this.responseItemsList.length);
      console.log("response array string: " + JSON.stringify(this.responseItemsList));
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  //server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    let bodyData = {
      index: pageInfo.offset,
      transporterId: this.transporterId,
      transporterDesc: this.transporterDesc,
      servprov: this.servprov,
    }
    this.doSearch(bodyData);
  }






  servProsArray: any[] = [];
  getServpros() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getServPros).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.servProsArray = response['data'];
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }






  getServproList() {
    let data = {
      transporterId: this.transporterId,
      transporterDesc: this.transporterDesc,
      servprov: this.servprov,
    }
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getServProList, data).subscribe(response => {
      this.page.count = response['data'].total;
      this.page.limit = response['data'].pageLength;
      this.serveProsList = response['data'].itemsList;
      console.log("serveProsList array string: " + JSON.stringify(this.serveProsList));
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  // saveForm(form: NgForm) {
  //   this.isLoading = true;
  //   let data = {
  //     "itemsList": [
  //       {
  //         "itemId": this.itemIdf,
  //         "itemCategory": this.itemCategoryf,
  //         "itemDescription": this.itemDescriptionf,
  //         "batchCode": this.batchCodef,
  //       }
  //     ]
  //   }
  //   console.log("submit data:  " + JSON.stringify(data));
  //   this.service.post_service(ApiserviceService.apisList.addOrUploadMtBatchCodes, data).subscribe(response => {
  //     //console.log("response array string: "+JSON.stringify(response));
  //     this.isLoading = false;
  //     this.toastr.success(response['message']);
  //     form.resetForm();
  //   }, (err) => {
  //     console.log("Error", err);
  //     this.toastr.error(err ? err : "Something went wrong..", "Error!");
  //     this.isLoading = false;
  //   })
  // }




  updateForm(form: NgForm) {
    this.isLoading = true;
    let data = {
      "itemsList": [
        {
          "id": this.transporterIdu,
          "description": this.transporterDescu,
          "servprov": this.servprovu,
          "transporterAddress": this.transporterAddressu,
          "city": this.cityu,
          "state": this.stateu,
          "postalCode": this.postalCodeu,
          "country": this.countryu,
          "isActive": this.isActiveu,
          "IndustryKey": this.IndustryKeyu,
          "stateCode": this.stateCodeu,
          "gstNo": this.gstNou,
          "gstState": this.gstStateu,
          "panNo": this.panNou,
        }
      ]
    }
    console.log("updateMtTruckType submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.updateTransporter, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.isLoading = false;
        this.doSubmitSearch();
        this.toastr.success(response['message']);

        $("#myModal").modal('hide');
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }




  showUpdateModel(row) {
    this.transporterIdu = row.id;
    this.transporterDescu = row.description;
    this.servprovu = row.servprov;
    this.transporterAddressu = row.transporterAddress;
    this.cityu = row.city;
    this.stateu = row.state;
    this.postalCodeu = row.postalCode;
    this.countryu = row.country;
    this.isActiveu = row.isActive;
    this.IndustryKeyu = row.IndustryKey;
    this.stateCodeu = row.stateCode;
    this.gstNou = row.gstNo;
    this.gstStateu = row.gstState;
    this.panNou = row.panNo;
    this.getServproList();
    console.log("******" + this.transporterIdu);
    console.log("******" + row.id);
    $("#myModal").modal('show');
  }






  insDate: any = "";
  insDatep: any = "";
  updDate: any = "";
  updDatep: any = "";


  // export to excel file
  export(): void {
    this.isLoading = true;
    if (this.responseItemsList === undefined) {
      this.isLoading = false;
    }
    if (this.responseItemsList.length > 0) {
      let data = {
        transporterId: this.transporterId,
        transporterDesc: this.transporterDesc,
        servprov: this.servprov,
        pageLength: this.page.count
        // pageLength: this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
      }
      this.service.post_service(ApiserviceService.apisList.getMtTransporter, data).subscribe(response => {
        
        if (response['statusCode'] == 200) {
          let excelRawData = [...response['data'].itemsList];
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {

            this.insDate = this.formatDate(excelRawData[i].insertDate);
            this.insDatep = this.effectiveDate;
            this.updDate = this.formatDate(excelRawData[i].updateDate);
            this.updDatep = this.effectiveDate;

            let data = {
              "Transporter Id": excelRawData[i].id,
              "Transporter Description": excelRawData[i].description,
              "Servprov": excelRawData[i].servprov,
              "Transporter Address": excelRawData[i].address,
              "City": excelRawData[i].city,
              "State": excelRawData[i].state,
              "Postal Code": excelRawData[i].postalCode,
              "Country": excelRawData[i].country,
              "Is Active": excelRawData[i].isActive,
              "Industry Key": excelRawData[i].industryKey,
              "State Code": excelRawData[i].stateCode,
              "GST No": excelRawData[i].gstNo,
              "GST State": excelRawData[i].gstState,
              "PAN No": excelRawData[i].panNo,
              "Insert Date   ": this.insDatep,
              "Update Date   ": this.updDatep,
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'Transporter.xlsx');
          this.isLoading = false;
        }else{
          this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...', 'Error!');
          this.isLoading = false;
        }

      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })

    } else {
      this.toastr.error("Not Records To Generate Excel...", "Error!");
      this.isLoading = false;
    }
  }




  formatDate(data) {
    if (data != null && data) {
      let formatted = new Date(data),
        mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
        day = ("0" + formatted.getDate()).slice(-2);
      this.formattedDate = [day, this.getMonth(mnth), formatted.getFullYear()].join("-");
      this.effectiveDate = this.formattedDate;
      return this.formatDate;
    } else {
      this.effectiveDate = "";
    }
  }
  month_names = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", 12: "Dec"
  };


  trimDate(date) {
    if (date === "" || date === undefined)
      return "";
    else
      var array = date.substring(0, 10).split("-");
    return array[2] + "-" + this.getMonth(array[1]) + "-" + array[0];
  }

  trimEmpty(val) {
    if (val === "" || val === undefined)
      return "";
    else {
      console.log(typeof val)
      console.log(val + "----" + val.length);
      // return val.trim();
    }
  }

  getMonth(number) {
    return this.month_names[number]
  }

  clearAll() {
    this.transporterId = "";
    this.transporterDesc = "";
    this.servprov = "";
  }

  // Refresh data
  refreshData() {
    // this.clearAll();
    this.table.offset = 0;
    this.page.offset = 0;
    this.doSubmitSearch();
  }



}
