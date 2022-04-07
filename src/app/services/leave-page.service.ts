import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeavePageService {

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  canLeavePage: boolean = true;
  forceLeavePage: boolean = false;
  nextUrl?:string;

  setCanLeave(data: { email:string }) {
    // const { email } = data;
    const email = data.email;
    this.canLeavePage = !email;
    console.log(`can leave: ${this.canLeavePage}`)
  }


  showMessage(url?:string) {
    this.nextUrl = url;
    const snackRef = this.snackBar.open('Sei sicuro?', 'Esci');
    snackRef.onAction().subscribe(
      () => {
        this.forceLeavePage = true;
        this.router.navigate([
          this.nextUrl || ''
        ]);
      }
    )
  }
}
