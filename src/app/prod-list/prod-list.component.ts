import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  @Input() product;
  @Input() category;
  constructor() {}

  ngOnInit() {}
  share(url: string) {
    window.open(url);
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }

}
