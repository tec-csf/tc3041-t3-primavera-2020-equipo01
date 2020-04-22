import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Businesses } from 'src/app/shared/models/businesses';
declare var swal: any;

@Component({
  selector: 'app-all-businesses',
  templateUrl: './all-businesses.component.html',
  styleUrls: ['./all-businesses.component.scss']
})
export class AllBusinessesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
