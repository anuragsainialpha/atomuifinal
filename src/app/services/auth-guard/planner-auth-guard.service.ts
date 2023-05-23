import { Injectable } from '@angular/core';
import { ApiserviceService } from '../api/apiservice.service';
import { constants } from '../../constants';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlannerAuthGuardService {
  userRoles: any;
  constructor(
    private service: ApiserviceService,
    private activateRouter:ActivatedRoute,
    private router:Router
  ) {
    this.userRoles = constants.roles;
  }
  canActivate() {
    if (this.service.checkLogin() && ((this.service.checkRole() == this.userRoles.planner1) || (this.service.checkRole() == this.userRoles.planner2) || (this.service.checkRole() == this.userRoles.planner3))) {
      return true
    }
    else{
      localStorage.setItem("authToken", '');
      localStorage.setItem("role","");
      localStorage.setItem("sourceID","");
      localStorage.setItem("userMenu","");
      localStorage.setItem("userName","");
      this.router.navigateByUrl("/");
    }
  }
}
