import { Injectable } from '@angular/core';
import { ApiserviceService } from '../api/apiservice.service';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FgsAuthGuarsService {

  constructor(
    private service: ApiserviceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  canActivate() {
    if (this.service.checkLogin()) {
      return true;
    }
    else {
      this.router.navigateByUrl('/');
      return false;
    }
  }

}
