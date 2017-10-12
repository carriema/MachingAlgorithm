import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Input} from "@angular/core";
import {SelectService} from "../service/service";
import {User} from "./user.model";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: any[] = [];

  constructor(private service: SelectService) { }

  ngOnInit() {
    this.service.userObservable.subscribe((users) => {
      this.users = users;
    });
  }

}
