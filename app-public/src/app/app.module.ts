import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GrindsComponent } from './grinds/grinds.component';
import { GrindListComponent } from './grind-list/grind-list.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    HomePageComponent,
    RegisterComponent,
    LoginComponent,
    GrindsComponent,
    GrindListComponent,
    PageHeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'grinds',
        component: GrindsComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      
    ])
  ],
  providers: [],
  bootstrap: [GrindListComponent]
})
export class AppModule { }
