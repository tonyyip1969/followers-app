import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers = [];
  error_message: string;

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
    this.service.getAll(name)
      .subscribe(
        (followers) => {
          this.followers = followers;
          if (this.followers.length === 0) {
            this.error_message = 'No follower has found!';
          }
        }
      );
  }

}
