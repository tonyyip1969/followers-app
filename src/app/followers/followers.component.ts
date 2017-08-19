import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';

interface IFollowers {
  user_id: string;
  avatar_url: string;
  url: string;
}

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers = [];

  constructor(private service: FollowersService) { }

  ngOnInit() {
  }

  search(search_name: HTMLInputElement) {
    if (search_name.value) {
      this.getFollowers(search_name.value);
    }

    search_name.value = '';
  }

  getFollowers(name: string) {
    this.service.getAll()
      .subscribe(
        (followers) => {
          this.followers = followers;
          console.log(this.followers);
        }
      );
  }

}
