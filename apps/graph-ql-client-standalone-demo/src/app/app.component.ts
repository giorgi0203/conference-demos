import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  providers: [HttpClient],
  selector: 'org-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'graph-ql-demo';
}
