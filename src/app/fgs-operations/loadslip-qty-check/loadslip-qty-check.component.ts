import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadslip-qty-check',
  templateUrl: './loadslip-qty-check.component.html',
  styles: []
})
export class LoadslipQtyCheckComponent implements OnInit {
  isLoading: boolean = false;
  constructor() { }

  ngOnInit() {
    localStorage.setItem("userMenu", "load-slip");
  }

}
