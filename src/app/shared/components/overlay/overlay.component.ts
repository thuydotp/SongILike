import { DynamicAnchorDirective } from "./../../directives/dynamic-anchor.directive";
import { OverlayModel } from "./../../../core/interfaces/overlay";
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy
} from "@angular/core";
import { OverlayService } from "src/app/core/services/overlay.service";
import { CollectionService } from 'src/app/core/services/collection.service';

@Component({
  selector: "app-overlay",
  templateUrl: "./overlay.component.html",
  styleUrls: ["./overlay.component.less"]
})

export class OverlayComponent implements OnInit, OnDestroy {
  models: OverlayModel[] = [];
  @ViewChild(DynamicAnchorDirective, { static: true })
  dynamicAnchor: DynamicAnchorDirective;

  currentAdIndex = -1;
  interval: any;
  isOverlayOpen = true;
  newCollectionName: string = '';

  constructor(
    private collectionService: CollectionService,
    private overlayService: OverlayService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.models = this.overlayService.getOverlay() || [];
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.models.length;
    const overlayItem = this.models[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(overlayItem.component);

    const viewContainerRef = this.dynamicAnchor.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<OverlayModel>componentRef.instance).data = overlayItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  closeOverlay() {
    this.isOverlayOpen = false;
    this.newCollectionName = null;
  }

  addNewCollection() {
    this.collectionService.addCollection(this.newCollectionName);
    this.closeOverlay();
  }

  onOpenNewPlaylistOverlay(){
    this.isOverlayOpen = true;
  }
}
