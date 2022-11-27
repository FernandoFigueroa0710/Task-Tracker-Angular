import { Component } from '@angular/core';
import { UiHandlerService } from 'src/app/services/ui-handler.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(
    private uiServiceHandler: UiHandlerService,
    private router: Router
  ) {
    this.subscription = this.uiServiceHandler
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  addTaskHandler() {
    this.uiServiceHandler.toggleAddTask();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
