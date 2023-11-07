import { Injectable } from '@angular/core';
import apiClient from '../infrastructure/http-client';

@Injectable()
export class UserRepository {
  async randomomer() {
    console.log("resp");
    const resp = await apiClient.get('/posts');
    console.log(resp);
    // const data = resp.data;
    // const {
    //   results: [user],
    // } = data;

    return resp;
  }
}
