import { Component, OnInit } from '@angular/core';
import {SelectService} from "../service/service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  countries: any[];
  devices: any[];
  userInfo: any[];
  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.countries = this.selectService.getAllArea();
    this.devices = this.selectService.getAllDevices();
  }
  queryDataList() {
    this.userInfo = this.selectService.getAllUsers(this.countries, this.devices);
  }

}
