import { Component, ComponentFactoryResolver, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DataService } from 'src/app/data/services/data.service';
import { LazyChildComponent } from '../lazy-child/lazy-child.component';

@Component({
  selector: 'app-lazy-comp-a',
  templateUrl: './lazy-comp-a.component.html',
  styleUrls: ['./lazy-comp-a.component.scss']
})
export class LazyCompAComponent implements OnInit {

  @ViewChild('child', { read: ViewContainerRef })
  childCom!: ViewContainerRef;

  childComp!: LazyChildComponent;
  inputData: string;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    public dataService: DataService,
    @Inject('childComp') data: any
  ) {
    this.inputData = data;
  }

  async ngOnInit() {
    const { LazyChildComponent } = await import('../lazy-child/lazy-child.component');

    const ref = this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(LazyChildComponent));
    this.childComp = ref.instance;
    this.childComp.data = "Subrat";

    this.childComp.emitter.subscribe(console.log);
    /**
     * Lazy load the component using ViewChild
     */
    //this.childCom.createComponent(this.cfr.resolveComponentFactory(LazyChildComponent));
  }

}
