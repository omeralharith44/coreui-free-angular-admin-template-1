import { Post } from './../../../module/post';
import { PostServices } from './../../../services/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taqeem',
  templateUrl: './taqeem.component.html',
  styleUrls: ['./taqeem.component.css']
})
export class TaqeemComponent implements OnInit {

  post: Post | null = null;
  public favoriteColor = '#26ab3c';

  constructor(private postServices: PostServices) { }
  // constructor() { }

  ngOnInit() {
    console.log("omer");
    this.fetchUser();
  }

  private async fetchUser() {
    const resp = await this.postServices.getPost();
    console.log(resp);
  }

}
