import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LeavePageService } from '../services/leave-page.service';

@Injectable({
  providedIn: 'root'
})
export class LeavePageGuard implements CanDeactivate<unknown> {
  constructor(
    private leavePageService: LeavePageService,
  ) {}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const canLeave = this.leavePageService.canLeavePage;
    const forceLeave = this.leavePageService.forceLeavePage;
    if(!canLeave) {
      this.leavePageService.showMessage(nextState?.url);
    }
    return forceLeave || canLeave;
  }


}
