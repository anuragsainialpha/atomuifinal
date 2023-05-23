import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { constants } from 'src/app/constants';

@Component({
  selector: 'app-pending-plans',
  templateUrl: './pending-plans.component.html',
  styleUrls: ['./pending-plans.component.scss']
})
export class PendingPlansComponent implements OnInit {
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  pageSize: number;
  limitOptions: Array<any> = [
    { key: '10', value: 10 },
    { key: '25', value: 25 },
    { key: '50', value: 50 },
    { key: '100', value: 100 }
  ];
  userRoles: any;
  planData = [];
  pendingPlansData = [];
  isLoading: boolean = false;
  constructor(
    private service: ApiserviceService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.isLoading = true;
    let data = {
    }
    this.service.post_service(ApiserviceService.apisList.pendingPlans, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.pendingPlansData = response['data'].plans;
        this.page.count = response['data'].total;
        this.page.limit = response['data'].pageLength;
        console.log("pending plans", this.pendingPlansData);
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

  ngOnInit() {
    localStorage.setItem("userMenu", "create-plan");
    this.userRoles = constants.roles;
  }
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.isLoading = true;
    // this.page.offset = pageInfo.offset;
    console.log("page info", pageInfo);
    let datatabledata = {
      index: pageInfo.offset,
      pageLength: pageInfo.pageSize
    }
    this.service.post_service(ApiserviceService.apisList.pendingPlans, datatabledata).subscribe(response => {
      this.pendingPlansData = response['data'].plans;
      this.page.count = response['data'].total;
      this.page.limit = response['data'].pageLength;
      console.log("pending plans", this.pendingPlansData);
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })

  }
  onPageSizeChanged(event) {
    this.page.limit = event;
    this.page.pageSize = this.pageSize;
    this.datatablePageData(this.page);
  }

  navigation(planId) {
    if ((this.service.checkRole() == this.userRoles.planner1) || (this.service.checkRole() == this.userRoles.planner2) || 
    (this.service.checkRole() == this.userRoles.planner3)|| (this.service.checkRole() == this.userRoles.L1MGR)|| (this.service.checkRole() == this.userRoles.L2MGR)) {
      this.router.navigateByUrl('/plan/pending-plans/view-plan/' + planId)
    } else if ((this.service.checkRole() == this.userRoles.fgsOperations1) || (this.service.checkRole() == this.userRoles.fgsOperations2) || (this.service.checkRole() == this.userRoles.fgsOperations3) || ((this.service.checkRole() == this.userRoles.fgsOperations))) {
      this.router.navigateByUrl('/fgs/pending-plans/view-plan/' + planId)
    } else if ((this.service.checkRole() == this.userRoles.rdc_PLN)) {
      this.router.navigateByUrl('/rdc/pending-plans/view-plan/' + planId)
    }
  }
}
