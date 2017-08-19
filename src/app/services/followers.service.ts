import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FollowersService {

  constructor(private http: Http) {

  }

  getAll(github_userid: string) {
    const url = `https://api.github.com/users/${github_userid}/followers`;
    const data_service = new DataService(url, this.http);
    return data_service.getAll();
  }

}
