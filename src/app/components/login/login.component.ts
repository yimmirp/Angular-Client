import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: UserService,public router: Router) { }

  ngOnInit(): void {
  }


  username: string = "";

  login() {
    this.auth.Login(this.username).subscribe((res) => {
      if (res['msg']) {
        let DataUser: UserInterface = res['DataUser'];
        this.auth.setCurrentUser(DataUser);
        this.router.navigate(['/crud']);

      } else {
          console.log('Credenciales Incorrectas');
      }
    })
  }

}
