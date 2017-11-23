import { Component, OnInit } from '@angular/core';

import {ApiConnectService} from "../apiconnect.service";

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html',
  styleUrls: ['./retailers.component.scss'],
  providers: [ApiConnectService]
})
export class RetailersComponent implements OnInit {



  retailers: Object[];
  retailersLength: number;
  constructor(private _retailers:ApiConnectService) {}

  ngOnInit() {
    this.getRetailers();
  }

  getRetailers(){
    // alert('hello');
    console.log('hello');
    this._retailers.apiRequestToRead('http://apparent.com.au/wp-json/wp/v2/posts')
        .subscribe(
            (data) => {

              this.retailers = data;
              this.retailersLength = data.length;

              console.log(data);
            },
            (error) => console.log(error)
        );
  }


  }

}
