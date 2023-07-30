import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/cache';
import { APOLLO_OPTIONS, Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

export function createApollo(httpLink: HttpLink) {
  console.log('createApollo');

  return {
    link: httpLink.create({ uri: 'http://localhost:3000/graphql' }),
    cache: new InMemoryCache(),
  };
}
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ApolloModule],
  exports: [HttpClientModule, ApolloModule],
  providers: [
    HttpClient,
    Apollo,
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class ApolloClientModule {}
