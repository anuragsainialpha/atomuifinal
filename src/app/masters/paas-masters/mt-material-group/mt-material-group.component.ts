import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
declare var $: any;


@Component({
  selector: 'app-mt-material-group',
  templateUrl: './mt-material-group.component.html',
  styleUrls: ['./mt-material-group.component.scss']
})
export class MtMaterialGroupComponent implements OnInit {

  isLoading: boolean = false;
  isShow: boolean = true;

  salesSku: any = "";
  itemId: any = "";
  compQty: any = "";
  itemSeq: any = "";
  oeCode: any = "";
  itemClassification: any = "";
  itemDescription: any = "";
  itemType: any = "";
  itemGroup: any = "";
  itemCategory: any = "";
  tte: any = "";
  loadFactor: any = "";
  formattedDate: string;
  effectiveDate: any = "";


  resultDataList: any[];
  responseItemsList: any[];

  materialGroupIdf: any = "";
  description1f: any = "";
  description2f: any = "";
  scmGroupf: any = "";
  mgIdf: any = "";

  materialGroupIdu: any = "";
  description1u: any = "";
  description2u: any = "";
  scmGroupu: any = "";
  mgIdu: any = "";


  materialGroupId: any = "";
  description1: any = "";
  description2: any = "";
  scmGroup: any = "";
  mgId: any = "";
  insertUser: any = "";
  insertDate: any = "";
  updateUser: any = "";
  updateDate: any = "";


  showUpdateModel(row) {
    this.materialGroupIdu = row.materialGroupId;
    this.description1u = row.description_1;
    this.description2u = row.description_2;
    this.scmGroupu = row.scmGroup;
    this.mgIdu = row.mgId;
    $("#myModal").modal('show');
  }


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
    localStorage.setItem("userMenu", "paas-master");
    this.getItemGroupsList();
    this.getScmgroupsList();
  }

  //show the filter
  showFilter() {
    this.isShow = !this.isShow
  }

  upload() { }

  // Datatable Footer
  onFooterPage(pageInfo) {
    console.log(pageInfo);

  }

  itemGroupsList: any[] = [];

  getItemGroupsList() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getItemGroupsList).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.itemGroupsList = response['data'];
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  scmGroupList: any[] = [];

  getScmgroupsList() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getScmgroupsList).subscribe(response => {
      console.log("response array string: " + JSON.stringify(response));
      this.scmGroupList = response['data'];
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }



  doSubmitSearch() {
    let data = {
      materialGroupId: this.materialGroupId,
      description1: this.description1,
      description2: this.description2,
      scmGroup: this.scmGroup,
      mgId: this.mgId,
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.doSearch(data)
  }

  doSearch(data) {
    console.log("submit data:  " + JSON.stringify(data));
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.getMtMaterialGroup, data).subscribe(response => {
      this.page.count = response['data'].total;
      this.page.limit = response['data'].pageLength;
      this.responseItemsList = response['data'].mtMaterialGroupList;
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
      materialGroupId: this.materialGroupId,
      description1: this.description1,
      description2: this.description2,
      scmGroup: this.scmGroup,
      mgId: this.mgId,
    }
    this.doSearch(bodyData);
  }




  insertStatus: string = "";

  //"mgId":this.mgIdf
  addMtMaterialGroup(form: NgForm) {
    this.isLoading = true;
    let data = {
      "mtMaterialGroupList": [
        {
          "materialGroupId": this.materialGroupIdf,
          "description_1": this.description1f,
          "description_2": this.description2f,
          "scmGroup": this.scmGroupf,
        }
      ]
    }
    console.log("submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.addOrUploadMtMaterialGroup, data).subscribe(response => {
      //console.log("response array string: "+JSON.stringify(response));
      this.insertStatus = response['data'].message;
      if (this.insertStatus === "Sucess") {
        this.toastr.success(response['message']);
      }
      else if (this.insertStatus === "Failed") {
        this.toastr.error("Please check!", "Could not insert record..");
      }
      this.isLoading = false;
      form.resetForm();
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }



  updateMtMaterialGroup(form: NgForm) {
    this.isLoading = true;
    let data = {
      "mtMaterialGroupList": [
        {
          "materialGroupId": this.materialGroupIdu,
          "description_1": this.description1u,
          "description_2": this.description2u,
          "scmGroup": this.scmGroupu,
          "mgId": this.mgIdu
        }
      ]
    }

    console.log("MtMaterialGroup submit data:  " + JSON.stringify(data));
    this.service.post_service(ApiserviceService.apisList.updateMtMaterialGroup, data).subscribe(response => {
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

  insDate: any = "";
  insDatep: any = "";
  updDate: any = "";
  updDatep: any = "";


  export(): void {
    this.isLoading = true;
    if (this.responseItemsList === undefined) {
      this.isLoading = false;
    }
    if (this.responseItemsList.length > 0) {
      let data = {
        materialGroupId: this.materialGroupId,
        description1: this.description1,
        description2: this.description2,
        scmGroup: this.scmGroup,
        mgId: this.mgId,
        // pageLength : this.page.count < this.service.maxPageLengthForExcel ? this.page.count : this.service.maxPageLengthForExcel,
        pageLength: this.page.count
      }
      this.service.post_service(ApiserviceService.apisList.getMtMaterialGroup, data).subscribe(response => {
        // this.page.count = response['data'].total;
        // this.page.limit = response['data'].pageLength;
        // this.responseItemsList = response['data'].mtMaterialGroupList;
        // console.log("response length: " + this.responseItemsList.length);
        // console.log("response array string: " + JSON.stringify(this.responseItemsList));
        if (response['statusCode'] == 200) {
          let excelRawData = [...response['data'].mtMaterialGroupList];
          let newExcelData = [];
          for (let i = 0; i < excelRawData.length; i++) {
            this.insDate = this.formatDate(excelRawData[i].insertDate);
            this.insDatep = this.effectiveDate;
            this.updDate = this.formatDate(excelRawData[i].updateDate);
            this.updDatep = this.effectiveDate;
            // console.log("******* "+this.datap1);
            let data = {
              "MaterialGroup Id ": excelRawData[i].materialGroupId,
              "Description1  ": excelRawData[i].description_1,
              "Description2  ": excelRawData[i].description_2,
              "ScmGroup": excelRawData[i].scmGroup,
              "Insert User": excelRawData[i].insertUser,
              "Insert Date  ": this.insDatep,
              "Update User ": excelRawData[i].updateUser,
              "Update Date ": this.updDatep,
            }
            newExcelData.push(data)
          }
          const workBook = XLSX.utils.book_new(); // create a new blank book
          const workSheet = XLSX.utils.json_to_sheet(newExcelData);
          var wsrows = [
            { hpt: 12 }, // row 1 sets to the height of 12 in points
            { hpx: 22 }, // row 2 sets to the height of 16 in pixels
          ];

          workSheet['!rows'] = wsrows;
          workSheet["!ref"]
          XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
          XLSX.writeFile(workBook, 'Material Group.xlsx');
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
      this.toastr.error('No records to generate excel...', 'Error!');
      this.isLoading = false;
    }
  }




  clearAll() {
    this.materialGroupId = "";
    this.description1 = "";
    this.description2 = "";
    this.scmGroup = "";
    this.mgId = "";
    this.insertUser = "";
    this.insertDate = "";
    this.updateUser = "";
    this.updateDate = "";
  }


  refreshData() {
    this.table.offset = 0;
    this.page.offset = 0;
    this.doSubmitSearch();
  }






  displayForm: boolean = false;
  displayAddForm() {
    if (this.displayForm)
      this.displayForm = false;
    else
      this.displayForm = true;
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



}

