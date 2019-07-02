import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const $;
declare const Chart;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    backendTestURL = 'http://localhost:9000/test.php/api/test'; 

    constructor(private httpClient: HttpClient) {
        // this.initialLoadData();
     }

    // // โหลดข้อมูลเข้ามาครั้งแรก
    // private initialLoadData(){

    //     this.httpClient
    //     .post(this.backendTestURL, { message: 'Request xxx to Frontend'}) // แปะ เพื่อส่งค่าจาก Frontend ไป Backend
    //     .subscribe(result => {
    //         console.log(result);
    //     });

    // }

    ngOnInit() {
        this.initialLoadChartJS();
    }

    // Run Chart js
    private initialLoadChartJS() {
        var data = {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86]
                }
            ]
        };

        var pdata = [
            {
                value: 300,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Complete"
            },
            {
                value: 50,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "In-Progress"
            }
        ]

        var ctxl = $("#lineChartDemo").get(0).getContext("2d");
        var lineChart = new Chart(ctxl).Line(data);

        var ctxp = $("#pieChartDemo").get(0).getContext("2d");
        var pieChart = new Chart(ctxp).Pie(pdata);
    }

}
