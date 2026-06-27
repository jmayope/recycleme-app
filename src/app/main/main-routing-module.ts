import { RouterModule, Routes } from "@angular/router";
import { Main } from "./main/main";
import { Dashboard } from "./dashboard/dashboard";
import { UserManagement } from "./user-management/user-management";
import { WasteManifestManagement } from "./waste-manifest-management/waste-manifest-management";
import { ReportManagement } from "./report-management/report-management";
import { OfferManagement } from "./offer-management/offer-management";
import { Settings } from "./settings/settings";
import { NgModule } from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'user-management',
        component: UserManagement
      }, 
      {
        path: 'waste-manifest-management',
        component: WasteManifestManagement
      }, 
      {
        path: 'report-management',
        component: ReportManagement
      },
      {
        path: 'offer-management',
        component: OfferManagement
      },
      {
        path: 'settings',
        component: Settings
      },
      {
        path: '**',
        redirectTo: 'auth/login'
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}