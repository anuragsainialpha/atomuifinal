import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { constants } from '../../constants';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  isLoading: boolean = false;
  password: any;
  userId: any;
  inputFocus: string = '';
  isShow: boolean = true;
  userRoles: any;
  environment: any;
  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private service: ApiserviceService,
    private toastr: ToastrService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.userRoles = constants.roles;
    let url = window.location.href;
    if (url.startsWith('https://atom')) {
     this.environment = "PROD"
    } else {
      this.environment = "DEV";
    }

  }

  //Login Function
  login() {
    this.isLoading = true;
    let loginData = {
      userId: this.userId,
      password: this.password
    }
    console.log("login ==> "+JSON.stringify(loginData))
    console.log("login ==> "+ApiserviceService.apisList.loginUrl)
    this.service.post_service(ApiserviceService.apisList.loginUrl, loginData).subscribe(response => {
      console.log("response ", response);
      // For L1_MGR and L2_MGR source location is null 
      localStorage.setItem("sourceID", response['data'].sourceId ? response['data'].sourceId : "")
      localStorage.setItem("authToken", response['data'].token);
      localStorage.setItem("userName", response['data'].userId);
      localStorage.setItem("role", response['data'].role);
      localStorage.setItem("isExtWarehouse", response['data'].isExtWarehouse);
      localStorage.setItem("env", response['data'].persistenceInstance);
      // check the login url for navigation 
      //check for Planner, L1_MGR, L2_MGR role 
      if ((this.service.checkRole() == this.userRoles.planner1) || (this.service.checkRole() == this.userRoles.planner2) || (this.service.checkRole() == this.userRoles.planner3) || 
      (this.service.checkRole() == this.userRoles.L1MGR) || (this.service.checkRole() == this.userRoles.L2MGR)) {
        this.router.navigateByUrl('/home');
      } else if (this.service.checkRole() == (this.userRoles.transporter)) {
        this.router.navigateByUrl('/transporter/assign-truck');
      } else if ((this.service.checkRole() == this.userRoles.fgsOperations1) || (this.service.checkRole() == this.userRoles.fgsOperations2) || (this.service.checkRole() == this.userRoles.fgsOperations3) || (this.service.checkRole() == this.userRoles.fgsOperations3) || (this.service.checkRole() == this.userRoles.fgsOperations4)) {
        this.router.navigateByUrl('/home');
      } else if ((this.service.checkRole() == this.userRoles.gateSecurity)) {
        this.router.navigateByUrl('/home')
      } else if ((this.service.checkRole() == this.userRoles.rdc_PLN)) {
        this.router.navigateByUrl('/home')
      } else if ((this.service.checkRole() == this.userRoles.rdc_GAT)) {
        this.router.navigateByUrl('/home')
      } else if ((this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
        this.router.navigateByUrl('/home')
      } else if ((this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY)) {
        this.router.navigateByUrl('/home')
      } else if ((this.service.checkRole() == this.userRoles.EXPORT_CHA)) {
        this.router.navigateByUrl('/transporter/assign-truck');
      } else if ((this.service.checkRole() == this.userRoles.ABU_PLN)) {
        this.router.navigateByUrl('/rdc/receving-rdc/transit-trucks')
      } else if ((this.service.checkRole() == this.userRoles.ADMIN)) {
        this.router.navigateByUrl('/admin/sap-masters/mt-item')
      }else if((this.service.checkRole() == this.userRoles.FPL)){
        this.router.navigateByUrl('/fpl/shipment-export-upload');
      }
      this.isShow = false;
    },
      (err) => {
        console.log("Error", err);
        this.toastr.clear();
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      });
  }


}
