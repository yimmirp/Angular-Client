import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { UserInterface } from "../../models/user-interface";
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  constructor(public crudService: UserService) { }

  ngOnInit(): void {
    this.crudService.GetUsers().subscribe((res: UserInterface[]) => {
      this.Usuarios = res;
    })

  }
  codu: string = "";
  username: string = "";
  firstname: string = "";
  lastname: string = "";
  Usuarios: UserInterface[] = [];

  addUser() {
    this.crudService.InsertUser(this.username, this.firstname, this.lastname)
      .subscribe((res: UserInterface[]) => {
        this.Usuarios = res;
        this.codu = "";
        this.username = "";
        this.firstname = "";
        this.lastname = "";
      })
  }

  getDataUser(codu, username, firstname, lastname) {
    this.codu = codu;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;

  }

  updateUser() {

    this.crudService.UpdateUser(this.codu, this.username, this.firstname, this.lastname)
      .subscribe((res: UserInterface[]) => {
        this.Usuarios = res;
        this.codu = "";
        this.username = "";
        this.firstname = "";
        this.lastname = "";
      })
  }

  deleteUser(codu) {
    this.crudService.DeleteUser(codu).subscribe((res: UserInterface[]) => {
      this.Usuarios = res;
    })
  }


  CerrarSesion() {
    this.crudService.logout();
  }
}
