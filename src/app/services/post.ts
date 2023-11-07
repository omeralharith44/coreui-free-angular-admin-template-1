import { Post } from './../module/post';
import { Injectable } from '@angular/core';
import apiClient from '../infrastructure/http-client';

@Injectable()
export class PostServices {
  async getPost() {
    const resp = await apiClient.get('/posts');
    return resp;
  }
  
  async getOnePost(id: number) {
    const resp = await apiClient.get(`/posts/${id}`);
    return resp;
  }

  async postPost(post: Post) {
    const resp = await apiClient.post('/posts', post);
    return resp;
  }

  async putPost(id: number, post: Post) {
    const resp = await apiClient.put(`/posts/${id}`, post);
    return resp;
  }

  async patchPost(id: number, post: Post) {
    const resp = await apiClient.patch(`/posts/${id}`, post);
    return resp;
  }

  async deletePost(id: number) {
    const resp = await apiClient.delete(`/posts/${id}`);
    return resp;
  }
  
}
