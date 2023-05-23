import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './services/api/apiservice.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'atom';
  constructor(
    public service: ApiserviceService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
    $(document).ready(function () {
      $(document).on('focus', ':input', function () {
        $(this).attr('autocomplete', 'off');
      });
    });
  }

  changeOfRoutes() {
    setTimeout(() => {
      var userMenu = localStorage.getItem('userMenu');
      $('.side-menu').removeClass('active');
      $('.' + userMenu + '-menu').addClass('active');
    }, 10);
  }
}
