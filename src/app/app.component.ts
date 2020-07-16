import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'paypal';
  endPtData = [];
  chartType = 'pie';
  chartData = [];
  chartLabels = [];

  //ag-grid
  rowData = [{
    "postid": 1,
    "id": 1,
    "name": "to work out how they work",
    "email": "Eliseo@gardner.biz",
    "body": "cheering as if it is indeed a great pleasure to the \ ntempora which needs \ fluid and the like \ nreiciendis for wisdom and denouncing"
  }]
  colDef = [{
    headerName: 'PostID', field: 'postId', sortable:true,filter:true
  },
  {
    headerName: 'Id', field: 'id',sortable:true,filter:true
  },
  {
    headerName: 'Name', field: 'name',sortable:true,filter:true
  },
  {
    headerName: 'Email', field: 'email',sortable:true,filter:true
  },
  {
    headerName: 'Body', field: 'body',sortable:true,filter:true
  }]

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getDataFromEP().subscribe((response: []) => {
      console.log(response);
      this.endPtData = response;

      this.endPtData.forEach((data) => {
        this.chartLabels.push(data.name);
        this.chartData.push(data.id)
      })
      this.rowData = response

    })
  }
}
