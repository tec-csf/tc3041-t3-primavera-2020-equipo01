import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cases } from 'src/app/shared/models/cases';
declare var swal: any;

@Component({
  selector: 'app-all-cases',
  templateUrl: './all-cases.component.html',
  styleUrls: ['./all-cases.component.scss']
})
export class AllCasesComponent implements OnInit {
  link = environment.apiUrl
  cases: Cases[];
  p: number = 1;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(environment.apiUrl + 'cases/getAll').subscribe((res:any) => {
      if (res.success){
        this.cases = res.data as Cases[]
      }
    })
  }

  delete(id: string){
    swal({
      title: 'Are you sure you want to delete?',
      text: "",
      type: '',
      showCancelButton: true,
      confirmButtonText: 'YES, DELETE!',
      cancelButtonText: 'CANCEL'
    }).then((result) => {    
      this.http.delete(environment.apiUrl + 'cases/delete/' + id.toString()).subscribe((res:any) => {
        if (res.success){
          swal("The case has been deleted");
          this.http.get(environment.apiUrl + 'cases/getAll').subscribe((res:any) => {
            if (res.success){
              this.cases = res.data as Cases[]
            }
          })
        }
      })
    }, (cancel) => {});
  }

}
