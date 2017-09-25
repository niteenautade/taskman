import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Http,RequestOptions,HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'JWT',
    tokenName: 'token',
		tokenGetter: (() => localStorage.getItem('token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

const appRoutes: Routes = [
 
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes/* ,
      { enableTracing: true } // <-- debugging purposes only */
    ),
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [{
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
