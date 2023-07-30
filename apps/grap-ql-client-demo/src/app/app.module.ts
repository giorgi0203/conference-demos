import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ApolloClientModule } from './apollo-client.module';

@NgModule({
  declarations: [AppComponent, ClientsComponent],
  imports: [BrowserModule,ReactiveFormsModule,ApolloClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
