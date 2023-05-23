import { Injectable } from '@angular/core';
import { ApiserviceService } from '../api/apiservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransporterService {
  userRoles:any;
  constructor(
    private service:ApiserviceService,
    private router:Router,
    private ActivaterRoute:ActivatedRoute
  ) { }
  canActivate() {
    if (this.service.checkLogin() && (this.service.checkRole() == this.userRoles.transporter)) {
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
