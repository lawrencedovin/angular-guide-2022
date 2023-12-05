import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    RouterModule.forChild([
      { path: 'auth', component: AuthComponent }
    ])
  ]
})
export class AuthModule {}
