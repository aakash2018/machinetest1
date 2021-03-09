import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AddCompaniesComponent } from './../add-companies/add-companies.component'
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  model: any = []
  constructor(private router: Router, public dialog: MatDialog) { }
  ngOnInit(): void {

  }
  addModel() {
    const dialogRef = this.dialog.open(AddCompaniesComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result){
        this.model.push(result);
      }
    });
  }
  deleteTask(i) {
    this.model.splice(i, 1)
  }

}
