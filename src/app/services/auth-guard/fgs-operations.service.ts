import { Injectable } from '@angular/core';
import { ApiserviceService } from '../api/apiservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FgsOperationsService {
  userRoles:any;
  constructor(
    private service:ApiserviceService,
    private router:Router,
    private ActivaterRoute:ActivatedRoute
  ) { }
  canActivate() {
    if (this.service.checkLogin() && ((this.service.checkRole() == this.userRoles.fgsOperations1) || (this.service.checkRole() == this.userRoles.fgsOperations2) || (this.service.checkRole() == this.userRoles.fgsOperations3) || (this.service.checkRole() == this.userRoles.fgsOperations4))) {
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
