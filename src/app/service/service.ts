
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Subscription, Subject, Observable} from "rxjs";
@Injectable()
export class SelectService {
  userSubscribe: Observable;
  constructor(private http: Http) {}

  getAllArea() {
    var countries = [];
    this.http.get('/countries').map(res => res.json()).subscribe((data) => {
      data.map(countryInfo => {
        countries.push({'name': countryInfo.country, 'selected': false})
      });
    });
    return countries;
  }

  getAllDevices() {
    var devices = [];
    this.http.get('/devices').map(res => res.json()).subscribe((data) => {
      data.map(deviceInfo => {
        devices.push({'deviceId': deviceInfo.deviceId, 'name': deviceInfo.description, 'selected': false})
      });
    });
    return devices;
  }

  getAllUsers(countries: any[], devices: any[]) {
    var countryArray = [];
    var deviceArray = [];
    countries.filter(data => data.selected).map(data => {countryArray.push(data.name)});
    devices.filter(data => data.selected).map(data => {deviceArray.push(data.deviceId)});

    console.log({'countries': countryArray, 'devices': deviceArray});
    this.userSubscribe = this.http.get('/testers', {params: {'countries': countryArray, 'devices': deviceArray}}).map(res => res.json());
  }





}
