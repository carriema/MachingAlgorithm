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

  users: any[];

  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.selectService.userSubscribe.subscribe((data) => {
      data.map(userInfo => {
        this.users.push({'firstName': userInfo.firstName, 'lastName': userInfo.lastName, 'country': userInfo.country});
      });
    });
  }

}
