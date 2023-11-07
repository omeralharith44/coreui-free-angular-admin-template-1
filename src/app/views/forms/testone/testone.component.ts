import { Component, OnInit } from '@angular/core';
import { Post } from './../../../module/post';
import { PostServices } from './../../../services/post';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-testone',
  templateUrl: './testone.component.html',
  styleUrls: ['./testone.component.css']
})
export class TestoneComponent implements OnInit {

  posts: Post[] | null = [{}];
  onePost: Post = {userId: 0, id: 0, title: '', body: ''};
  postId: number = this.route.snapshot.params['id'];
  
  public favoriteColor = '#26ab3c';
  PostForm: FormGroup = new FormGroup({});

  constructor(private postServices: PostServices, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.getPosts();
    this.CreateForm();
    this.router.events.subscribe((val) => {
      if (val instanceof ActivationEnd) {
        this.postId = this.route.snapshot.params['id'];
        if (this.postId)
          this.getOnePost(this.postId);
      }
    });
    if (this.postId)
      this.getOnePost(this.postId);
  }

  CreateForm() {
    this.PostForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl(null, [Validators.required]),
    });
  }
  
  private async getPosts() {
    const resp = await this.postServices.getPost();
    this.posts = resp.data;
  }

  private async getOnePost(id: number) {
    const resp = await this.postServices.getOnePost(id);
    this.onePost = resp.data;
    this.PostForm.patchValue({
      title: this.onePost.title,
      body: this.onePost.body,
    });
  }

  async postPost() {
    this.onePost = {userId: 1, title: this.PostForm.get('title')?.value, body: this.PostForm.get('body')?.value}
    const resp = await this.postServices.postPost(this.onePost);
    console.log(resp);
  }

  async putPost() {
    this.onePost = {userId: 1, title: this.PostForm.get('title')?.value, body: this.PostForm.get('body')?.value}
    const resp = await this.postServices.putPost(this.postId, this.onePost);
    console.log(resp);
  }

  async patchPost() {
    this.onePost = {userId: 1, title: this.PostForm.get('title')?.value}
    const resp = await this.postServices.patchPost(this.postId, this.onePost);
    console.log(resp);
  }

  async deletePost() {
    const resp = await this.postServices.deletePost(this.postId);
    console.log(resp);
  }
  
}
