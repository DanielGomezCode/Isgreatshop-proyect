import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCartService {
  @Output() carritodecompras:any;
  constructor() { }
}
