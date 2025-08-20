import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagService {
  private miFlag: boolean = false;

  getFlag(): boolean {
    return this.miFlag;
  }

  setFlag(valor: boolean): void {
    this.miFlag = valor;
  }
}