import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-view',
  templateUrl: './api-view.component.html',
  styleUrls: ['./api-view.component.css']
})
export class ApiViewComponent implements OnInit {
  dataSource: any;

  constructor(private apiService: ApiService,
    private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.getData();
  }

  async getData(): Promise<void> {
    await this.apiService
      .getAll()
      .subscribe((res: any) => {
        this.apiService.showMessage('Api All');
        this.dataSource = res;
    });
  }

  findRandom() {
    this.apiService.getRandom(1).subscribe((res) => {
      this.apiService.showMessage('Api Random');
      this.router.navigate(['/api'])
      console.log(res);
    })
  }
}

