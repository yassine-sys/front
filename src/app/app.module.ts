import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleComponent } from './components/module/module.component';
import { HttpClientModule } from '@angular/common/http';
import { GroupComponent } from './components/group/group.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { GroupFormComponent } from './components/groupform/groupform.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOptionModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import { NestedGridComponent } from './components/nested-grid/nested-grid.component';
import { SubmoduleformComponent } from './components/submoduleform/submoduleform.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { AddgroupComponent } from './components/addgroup/addgroup.component';
import { ModuleFormComponent } from './components/moduleform/moduleform.component';
import { MatChipsModule } from '@angular/material/chips';
import { UserManagmentComponent } from './components/user-managment/user-managment.component';
import { MatSortModule } from '@angular/material/sort';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './TokenInterceptor ';
import { ErrorComponent } from './components/error/error.component';
import { UpdatesubmodulemodalComponent } from './components/updatesubmodulemodal/updatesubmodulemodal.component';
import {FonctionformComponent} from './components/fonctionform/fonctionform.component';
import { UpdatefunctionmodalComponent } from './components/updatefunctionmodal/updatefunctionmodal.component';
import { RapportComponent } from './rapport/rapport.component';
import { FunctionDetailsComponent } from './function-details/function-details.component'
import { Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent,
    GroupComponent,
    GroupFormComponent,
    NestedGridComponent,
    AddgroupComponent,
    SubmoduleformComponent,
    ModuleFormComponent,
    UserManagmentComponent,
    UserDialogComponent,
    HomeComponent,
    ErrorComponent,
    UpdatesubmodulemodalComponent,
    FonctionformComponent,
    UpdatefunctionmodalComponent,
    RapportComponent,
    FunctionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    FontAwesomeModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSelectModule,
    CommonModule,
    TableModule,
    SharedModule,
    TreeTableModule,
    MatChipsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
