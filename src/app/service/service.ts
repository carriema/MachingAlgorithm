
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Subject} from "rxjs";
import {User} from "../userlist/user.model";
@Injectable()
export class SelectService {
  userObservable = new Subject<User[]>();
  constructor(private http: Http) {}

  getAllArea() {
    let countries = [];
    this.http.get('/countries').map(res => res.json()).subscribe((data) => {
      data.map(countryInfo => {
        countries.push({'name': countryInfo.country, 'selected': false})
      });
    });
    return countries;
  }

  getAllDevices() {
    let devices = [];
    this.http.get('/devices').map(res => res.json()).subscribe((data) => {
      data.map(deviceInfo => {
        devices.push({'deviceId': deviceInfo.deviceId, 'name': deviceInfo.description, 'selected': false})
      });
    });
    return devices;
  }

  getAllUsers(countries: any[], devices: any[]) {
    let countryArray = [];
    let deviceArray = [];
    countries.filter(data => data.selected).map(data => {countryArray.push(data.name)});
    devices.filter(data => data.selected).map(data => {deviceArray.push(data.deviceId)});

    let users = [];
    this.http.get('/testers', {params: {'countries': countryArray, 'devices': deviceArray}}).map(res => res.json()).subscribe((data) => {
      data.map(userInfo => {
        users.push(new User(userInfo.firstName, userInfo.lastName, userInfo.country, +userInfo.count, userInfo.lastLogin));
      });
    });
    this.userObservable.next(users)

  }





}
