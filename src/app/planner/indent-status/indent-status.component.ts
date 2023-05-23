import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indent-status',
  templateUrl: './indent-status.component.html',
  styleUrls: ['./indent-status.component.scss']
})
export class IndentStatusComponent implements OnInit {

  isLoading: boolean = false;
  indentData = [];
  indentDate='';
  indentId='';
  transporter='';
  source='';
  destination='';
  truckType='';
  materialGrp='';
  count:number = 0;
  minDate = new Date();
  states:State[] = [
    {value: 'dlr-0', viewValue: 'DLR'},
    {value: 'gjr-1', viewValue: 'GJR'}
  ];
  createIndentSuccess = false;

  constructor() { }

  ngOnInit() {
    localStorage.setItem("userMenu","indents");
    this.indentData = [
      {
        dispatchDate: '12-Aug-2018',
        indentId: 'IND-1002-DLR-101098-001',
        destination: 'DLR1',
        truckType: '32ft_MA',
        transporter: 'Parasmani',
        materialGrp: 'PCR',
        trucksRequested: 6,
        trucksCancelled: 2,
        trucksReported: 2,
        trucksRejected: 0,
        balanceTrucks: 2
      },
      {
        dispatchDate: '12-Aug-2018',
        indentId: 'IND-1002-DLR-101098-001',
        destination: 'DLR1',
        truckType: '32ft_MA',
        transporter: 'Parasmani',
        materialGrp: 'PCR',
        trucksRequested: 4,
        trucksCancelled: 2,
        trucksReported: 1,
        trucksRejected: 1,
        balanceTrucks: 0
      },
      {
        dispatchDate: '12-Aug-2018',
        indentId: 'IND-1002-DLR-101098-001',
        destination: 'DLR1',
        truckType: '32ft_MA',
        transporter: 'Parasmani',
        materialGrp: 'PCR',
        trucksRequested: 4,
        trucksCancelled: 1,
        trucksReported: 2,
        trucksRejected: 0,
        balanceTrucks: 1
      }

    ];
    this.indentData.push({
      dispatchDate: '',
      indentId: '',
      destination: '',
      truckType: '',
      transporter: '',
      materialGrp: 'Total:',
      trucksRequested: 14,
      trucksCancelled: 5,
      trucksReported: 5,
      trucksRejected: 1,
      balanceTrucks: 3

    });
  }

  createIndent(){
    this.createIndentSuccess = true;
  }

  searchIndent(){
    alert();
  }

}

export interface State {
  value: string;
  viewValue: string;
}