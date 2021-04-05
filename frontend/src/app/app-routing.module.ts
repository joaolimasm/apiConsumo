import { ApiViewComponent } from './components/api/api-view/api-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './views/api/api.component';
import { HomeComponent } from './views/home/home.component';
const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "api",
  component: ApiComponent
},
{
  path: "api/api-view",
  component: ApiViewComponent,

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
