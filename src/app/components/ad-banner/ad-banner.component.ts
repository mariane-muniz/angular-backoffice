import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdItem} from '../ad-item';
import {AdDirectiveDirective} from '../../directives/ad-directive.directive';
import {AdComponent} from '../ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[] = [];
  @ViewChild(AdDirectiveDirective, {static: true}) adHost: AdDirectiveDirective;

  currentIndex = 1;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponents();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponents(): void {
    this.currentIndex = (this.currentIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds(): void {
    this.interval = setInterval(() => {
      this.loadComponents();
    });
  }
}
