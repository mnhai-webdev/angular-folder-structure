import { Component, ComponentFactoryResolver, Injector, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.scss']
})
export class LazyComponentComponent implements OnInit {

  title = 'lazy-demo';
  dialogS = false;

  @ViewChild('lazy1', {read: ViewContainerRef})
  ChildLazy1: ViewContainerRef | any;

  @ViewChild('lazy2', {read: ViewContainerRef})
  ChildLazy2: ViewContainerRef | any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
  }

  async getLazy1() {
    this.viewContainerRef.clear();
    const {Lazy1Component} = await import('./lazy1/lazy1.component');
    const refObject = this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component)
    );
    this.ChildLazy1 = refObject.instance;
    this.ChildLazy1.Message = 'Hello World';
  }

  async getLazy2() {
    this.viewContainerRef.clear();
    const {Lazy2Component} = await import('./lazy2/lazy2.component');
    const refObject = this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component)
    );
    this.ChildLazy2 = refObject.instance;
    this.ChildLazy2.Message = 'Open Dialog And Select The Option';
    this.ChildLazy2.emitter.subscribe((isSelected: boolean) => {
      if (isSelected) {
        this.dialogS = isSelected;
      } else {
        this.dialogS = false;
      }
    });
  }

}
