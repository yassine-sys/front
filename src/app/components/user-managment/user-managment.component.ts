import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/model/User';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';


@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['uId', 'username', 'dateCreation', 'etat','actions'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService,public dialog: MatDialog) { }
  @ViewChild(MatSort) sort!: MatSort ;


  ngOnInit() {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort||null;
    });
  }
  ngAfterViewInit() {
    
  }

  editUser(user:User){
    console.log("edit:",user)
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '350px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit(); 
    });
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(
      res=>{this.ngOnInit()},
      err=>{console.log(err);}
    )
  }

  openForm(): void { 
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '350px', 
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit(); 
    });
  }
}
