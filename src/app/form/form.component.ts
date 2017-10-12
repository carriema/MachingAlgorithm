import { Component, OnInit } from '@angular/core';
import {SelectService} from "../service/service";
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  countries: any[];
  devices: any[];
  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.countries = this.selectService.getAllArea();
    this.devices = this.selectService.getAllDevices();
  }
  queryDataList() {
    this.selectService.getAllUsers(this.countries, this.devices);
  }

}
