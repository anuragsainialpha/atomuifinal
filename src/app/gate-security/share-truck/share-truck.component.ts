import { constants } from './../../constants';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-share-truck',
  templateUrl: './share-truck.component.html',
  styleUrls: ['./share-truck.component.scss']
})
export class ShareTruckComponent implements OnInit {
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  isLoading: boolean = false;
  shareedTrucksData = [];
  userRoles: any;
  ROLE_DP_REP:string;
  constructor(
    public service: ApiserviceService,
    public toastr: ToastrService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "fgs-truck-status");
    this.userRoles = constants.roles;
    this.getSharedTrucks();
    this.ROLE_DP_REP=this.service.checkRole();
  }

  //get ALl the Trucks which are shared with this plant
  getSharedTrucks() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getShareTrcuks).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.shareedTrucksData = response['data'];
        this.shareedTrucksData = [...this.shareedTrucksData];
        this.isLoading = false;
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

  // Server side pagination
  datatablePageData(data) {

  }

  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }
  shareTruck(shareTruckData) {
    let shipmentId = shareTruckData.shipmentId;
    let type = shareTruckData.type;

    if (type == 'FGS_EXP') {
      this.router.navigate(['/fgs/create-load-slip-for-export'], { queryParams: { shipmentNumber: shipmentId } });
    } else if (type == 'JIT_OEM') {
      this.router.navigate(['/jit/create-load-slip-for-jit'], { queryParams: { shipmentNumber: shipmentId,isShareTruck:'true' } });
    } else {
      this.router.navigate(['/fgs/create-load-slip'], { queryParams: { shipmentNumber: shipmentId } });
    }

  }
}
