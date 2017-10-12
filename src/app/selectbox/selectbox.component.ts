import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {SelectService} from "../service/service";
import {Input} from "@angular/core";

@Component({
  selector: 'select-box',
  templateUrl:'./selectbox.component.html',
  styleUrls: ['./selectbox.component.css']
})

export class SelectBoxComponent {
  @Input() selectContent: any[] = [];

  constructor() {

  }

  ngOnInit(): void {
  }

  checkAll(event) {
    this.selectContent.forEach(x => x.selected = event.target.checked);
  }

}
