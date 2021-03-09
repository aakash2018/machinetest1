import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-add-companies',
  templateUrl: './add-companies.component.html',
  styleUrls: ['./add-companies.component.css']
})
export class AddCompaniesComponent implements OnInit {
  model: any = { testings: 'testing', date: '', priority: 'low' }
  constructor(public router: Router) { }

  ngOnInit(): void {

  }


}
