import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HoverDirective } from './hover.directive';
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    SetupPageComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
