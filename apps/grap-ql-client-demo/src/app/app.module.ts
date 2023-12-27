import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ApolloClientModule } from './apollo-client.module';
import { ClientsModule } from './features/clients/clients.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,ReactiveFormsModule,ApolloClientModule,ClientsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
