import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Login } from "./login/login";
import { Register } from "./register/register";
import { SelectRole } from "./select-role/select-role";
import { SelectPlant } from "./select-plant/select-plant";
import { SelectEntity } from "./select-entity/select-entity";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'select-role',
    component: SelectRole
  },
  {
    path: 'select-plant',
    component: SelectPlant
  },
  {
    path: 'select-entity',
    component: SelectEntity
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}