import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({
      Username: [null, Validators.compose([Validators.required])],
      Password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit(credentials) {
    const creds = JSON.stringify(credentials);

    const contentHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    const LOGIN_URL = 'http://localhost/legos/api/Login2';
    this.http.post(LOGIN_URL, credentials, { headers: contentHeader, observe: 'response' })
      .subscribe(
      (resp) => {
        const header: HttpHeaders = resp.headers;
        console.log(header.get('Authorization'));
      },
      (resp) => {
        console.log('resp-error');
        console.log(resp);
      }
      );

  }
}
