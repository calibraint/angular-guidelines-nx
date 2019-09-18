import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {}

  init(): void {
    this.router.events.pipe(
      filter((event: NavigationEnd) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route: ActivatedRoute) => {
         while (route.firstChild) {
           route = route.firstChild;
         }
         return route;
      }),
      mergeMap((route: ActivatedRoute) => route.data)
    ).subscribe((event: object) => {
      const title: string = event['title'];
      this.titleService.setTitle(title);
    });
  }
}
