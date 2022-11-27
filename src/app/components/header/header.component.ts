import { Component } from '@angular/core';
import { UiHandlerService } from 'src/app/services/ui-handler.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiServiceHandler: UiHandlerService) {
    this.subscription = this.uiServiceHandler
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  addTaskHandler() {
    this.uiServiceHandler.toggleAddTask();
  }
}
