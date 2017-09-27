import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }
  getLocalStorageItem(name){
    return localStorage.getItem(name);
  }
}
