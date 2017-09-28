import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http,RequestOptions,HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { TaskappComponent } from './taskapp/taskapp.component'
import { CreatetaskComponent } from './taskapp/createtask/createtask.component'
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { GlobalService } from './services/global/global.service';
import { ViewalltasksComponent } from './taskapp/viewalltasks/viewalltasks.component';
import { ViewusertaskComponent } from './taskapp/viewusertask/viewusertask.component';
import { UserselectboxComponent } from './taskapp/components/userselectbox/userselectbox.component';
import { SharedataService } from './services/sharedata/sharedata.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'JWT',
    tokenName: 'token',
		tokenGetter: (() => localStorage.getItem('token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

const appRoutes : Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },  
];

const innerRoutes : Routes = [
  { path: 'taskapp', component: TaskappComponent,
    children: [
      { path: 'createtask', component: CreatetaskComponent },
      { path: 'viewalltasks', component: ViewalltasksComponent },
      { path: 'viewusertask', component: ViewusertaskComponent },
      { path: 'viewusertask/:id', component: ViewusertaskComponent }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatetaskComponent,
    TaskappComponent,
    ViewalltasksComponent,
    ViewusertaskComponent,
    UserselectboxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(innerRoutes),
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [{
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  },
    AuthGuard,
    GlobalService,
    SharedataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
