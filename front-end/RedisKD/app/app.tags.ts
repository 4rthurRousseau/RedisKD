import {bootstrap} from 'angular2/platform/browser';
import {Component, enableProdMode, Injectable, OnInit} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';


@Injectable()
class TagService {
  constructor(private http: Http) {}
  
  getTags() {
    const url = 'http://127.0.0.1:8080/tags';
    const parameters = new URLSearchParams();
    return this.http
      .get(url, {search: parameters})
      .map(res => JSON.parse(res.text().replace(new RegExp('tags:','g'),''));
  }
  getCount(tag){
    const url = 'http://127.0.0.1:8080/tags/count/' + tag;
    const parameters = new URLSearchParams();
    return this.http
      .get(url, {search: parameters})
      .map(res => res.text());
  }
}

@Component({
  selector: 'app-tags',
  template: `<div id='ListTags'><ul> 
                <li *ngFor="#tag of tags | async" > <span onclick='display_resources_tag(this)' id='{{tag}}'> {{tag}} ( {{service.getCount(tag)}} ) </span></li></ul>`, 
  providers: [HTTP_PROVIDERS, TagService],
})
export class Tag implements OnInit {
  constructor(private service: TagService) { }
  
  ngOnInit() {
    this.tags = this.service.getTags();
  }
}