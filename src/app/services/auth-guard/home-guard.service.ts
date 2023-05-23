import { Injectable } from '@angular/core';
import { ApiserviceService } from '../api/apiservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardService {
  userRoles: any;
  constructor(
    private service: ApiserviceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.userRoles = constants.roles;
  }


  canActivate() {
    if (!(this.service.checkLogin())) {
      return true;
    }
    else {
      // this.router.navigateByUrl("/home");
      // check the login url for navigation 
      //check for Planner role 
      if ((this.service.checkRole() == this.userRoles.planner1) || (this.service.checkRole() == this.userRoles.planner2) || (this.service.checkRole() == this.userRoles.planner3)) {
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
      } else if ((this.service.checkRole() == this.userRoles.FPL)) {
        this.router.navigateByUrl('/fpl/shipment-export-upload');
      }
      return false;
    }
  }
}
