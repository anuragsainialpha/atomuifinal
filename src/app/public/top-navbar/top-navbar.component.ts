import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { constants } from '../../constants';
declare var $: any;

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})


export class TopNavbarComponent implements OnInit {
  userRoles: any;
  pageStatus: string = '';
  createPlanShow: boolean = false;
  environment: any;
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public service: ApiserviceService
  ) { }

  ngOnInit() {
    this.pageStatus = 'plans';
    this.userRoles = constants.roles;
    this.environment = (localStorage.getItem("env")) ? (localStorage.getItem("env")) : '';
    
  }

  //logout
  logout() {
    localStorage.setItem("authToken", '');
    localStorage.setItem("role", "");
    localStorage.setItem("sourceID", "");
    localStorage.setItem("userMenu", "");
    localStorage.setItem("userName", "");
    localStorage.setItem("isExtWarehouse", '');
    localStorage.setItem("env", '');
    this.router.navigateByUrl('/');
  }
  openMenu(createPlan: any): void {
    console.log(createPlan);
  }
  
  showCreatePlan() {
    this.createPlanShow = true;
  }
  getUserName() {
    if (localStorage.getItem("userName")) {
      return localStorage.getItem("userName");
    }
  }
  getUserRole() {
    if (localStorage.getItem('role')) {
      return localStorage.getItem('role')
    }
  }
  getUserSource() {
    if (localStorage.getItem('sourceID')) {
      return localStorage.getItem('sourceID')
    }
  }
  hideOverLay() {
    console.log("overlaty")
  }

  open(element) {
    
    let width = $(window).width();
    if(width < 1024) {
      return 
    }
    element.openMenu();
    
  }
  navClose(){
    let width = $(window).width();
    if(width < 1024) {
      $("#navbarText").removeClass("show");
      $(".navbar-toggler-icon").parent().toggleClass("collapsed");
      $(".navbar-toggler-icon").parent().attr("aria-expanded","false");
    }
      
  }
}
