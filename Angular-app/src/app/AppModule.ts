import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { AddComponent } from './Add/Add.component';
import { PropertyDetailComponent } from './Property/PropertyDetail/PropertyDetail.component';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './services/my-service.service';
import { Routes ,RouterModule,} from '@angular/router';
import { PageNotFoundComponent } from './Property/PageNotFound/PageNotFound.component';
import { UserLoginComponent } from './Users/UserLogin/UserLogin.component';
import { UserRegistrationComponent } from './Users/UserRegistration/UserRegistration.component';
// ngx bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {CarouselModule} from 'ngx-bootstrap/carousel'
//template driven form
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { UserServiceService } from './services/user-service.service';
import { AlertifyServiceService } from './services/alertify-service.service';
import { AuthServiceService } from './services/auth-service.service';
import { ResolverService } from './Property/PropertyDetail/resolver.service';
import { MultilistFromIndexComponent } from './Property/multilist-from-index/multilist-from-index.component';
import { FilterPipe } from './Pipes/Filter.pipe';
import { SortPipe } from './Pipes/Sort.pipe';
import { DataShareService } from './services/dataShare.service';

const appRoutes:Routes=[
  {
    path:'',
    component:PropertyListComponent
  },
  {
    path:'rent',
    component:PropertyListComponent
  },
  {
    path:'add',
    component: AddComponent
  },
  {
    path:'properties/:id',
    component: PropertyDetailComponent,
    resolve:{
      prop:ResolverService
      // prop is the name of our resolver dat will be used in our detail page
    }
  },
  {
    path:'Login',
    component: UserLoginComponent

  },
  {
    path:'Register',
    component: UserRegistrationComponent

  },
  {
    path:'Carousel',
    component: MultilistFromIndexComponent

  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
]


@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
    NavbarComponent,
    AddComponent,
    PropertyDetailComponent,
    PageNotFoundComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    MultilistFromIndexComponent,
    // pipes
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Router,
    // ActivatedRoute,
    // AbstractControl, ValidationErrors, ValidatorFn
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot()

  ],
  // to auto import [ctrl + space]
  providers: [
    MyServiceService,
    UserServiceService,
    AlertifyServiceService,
    AuthServiceService,
    ResolverService,
    DataShareService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
