import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile: File = null;

  constructor(private http: HttpClient) {

  }
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.file[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('<server-url>', fd, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
          } else if (event.type === HttpEventType.Response) {
            console.log(event);
          }
        },
        err => { }
      );
  }

  /*
  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('<server-url>', fd)
      .subscribe(
        res => { console.log(res); },
        err => { }
      );
  }
  */
}
