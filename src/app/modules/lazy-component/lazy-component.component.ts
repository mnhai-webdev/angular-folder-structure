import { Component, ComponentFactoryResolver, Injector, OnInit, Type, ViewContainerRef } from '@angular/core';
import { DataService } from 'src/app/data/services/data.service';
import { LazyCompAComponent } from './lazy-comp-a/lazy-comp-a.component';

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.scss']
})
export class LazyComponentComponent implements OnInit {

  title = 'lazyComp';
  lazyCom!: Promise<Type<LazyCompAComponent>>;
  lazyInjector!: Injector;
  data: string = '';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private dataServise: DataService,
    private injector: Injector
  ) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  async load() {

    this.dataServise.data = "Fun of Heuristic";
    /**
     * Lazy load the component by appending the component data to the DOM
     */
    // this.viewContainerRef.clear();
    // const {LazyCompAComponent} = await import('./lazy-comp-a/lazy-comp-a.component');
    // this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(LazyCompAComponent));

    /**
     * Lazy load the component using ngComponentOutlet
     */

    if (!this.lazyCom) {
      this.data = "Some data"
      this.lazyInjector = Injector.create({
        providers: [{
          provide: 'childComp',
          useValue: this.data
        }],
        parent: this.injector
      });
      this.lazyCom = import('./lazy-comp-a/lazy-comp-a.component')
        .then(({ LazyCompAComponent }) => LazyCompAComponent);
    }
  }

}
