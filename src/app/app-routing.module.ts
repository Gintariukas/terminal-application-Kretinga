import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {HeadlineComponent} from "./components/headline/headline.component";
import {ObjectDescpComponent} from "./components/object-descp/object-descp.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'headlines', component: HeadlineComponent},
  {path: 'object-description', component: ObjectDescpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
