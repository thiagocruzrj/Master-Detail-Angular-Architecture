import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';


const routes: Routes = [
  { path: '', component: CategoryListComponent }, // read
  { path: 'new', component: CategoryFormComponent }, // create
  { path: ':id/edit', component: CategoryFormComponent } // update
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
