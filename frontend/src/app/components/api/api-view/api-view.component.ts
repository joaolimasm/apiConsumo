import { Api } from './../api.model';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-api-view',
  templateUrl: './api-view.component.html',
  styleUrls: ['./api-view.component.css']
})
export class ApiViewComponent implements OnInit {

  api: Api = {
    abv: 'string',
    address: 'string',
    category: 'string',
    city: 'string',
    cordinates: 'string',
    country: 'string',
    description: 'string',
    ibu: 'string',
    name: 'string',
    state: 'string',
    website: 'string',
  };

  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
  }

  getData(): void {

    this.apiService.getAll().subscribe((res) => {
      this.apiService.showMessage('Api All');
      this.router.navigate(['/api'])
      console.log(res);

    })
  }
  findRandom() {
    this.apiService.getRandom(1).subscribe((res) => {
      this.apiService.showMessage('Api Random');
      this.router.navigate(['/api'])
      console.log(res);
    })
  }
}

