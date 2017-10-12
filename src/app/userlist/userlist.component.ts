import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Input} from "@angular/core";
import {SelectService} from "../service/service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: any[] = [];

  constructor(private http : Http, private selectService: SelectService) { }

  ngOnInit() {
    this.users = this.selectService.getAllUsers();
  }

}
