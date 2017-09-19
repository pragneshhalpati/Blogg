
// import { Hero } from './hero';
// import { Component, Input, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Location }                 from '@angular/common';

// import { HeroService } from './hero.service';
// import 'rxjs/add/operator/switchMap';
 

// @Component({
//   selector: 'hero-detail',
//   templateUrl: './hero-detail.component.html',
// })
// export class HeroDetailComponent implements OnInit  {
//   constructor(
//     private heroService: HeroService,
//     private route: ActivatedRoute,
//     private location: Location
//   ) {}
//   ngOnInit(): void {
//     this.route.paramMap
//       .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
//       .subscribe(hero => this.hero = hero);
//   }
//   save(): void {
//     this.heroService.update(this.hero)
//       .then(() => this.goBack());
//   }
//   goBack(): void {
//     this.location.back();
//   }

//   @Input() hero: Hero;
// }

import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    debugger
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    debugger
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}