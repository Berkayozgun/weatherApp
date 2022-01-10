import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public topluData: any;
  public url:string="http://microwebservice.net/ecodation/6harizan/gokhan/ilk_web_servis.php";
  public havaURL:string="https://www.havadurumux.net/svg/";

  constructor(private activatedRoute: ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(this.url).subscribe(data=>{
      this.topluData = data;
    });

  }

}
