import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OverlayService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  isOpen: boolean = false;
  private openOverlaySubject: Subject<boolean> = new Subject<boolean>();
  $openOverlay = this.openOverlaySubject.asObservable();

  toggleOverlay(isOpen: boolean) {
    this.openOverlaySubject.next(isOpen);
  }

  createOverlay(
    viewContainerRef: ViewContainerRef,
    component: any,
    inputs: any
  ) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    for (const key of Object.keys(inputs)) {
      (<any>componentRef.instance)[key] = inputs[key];
    }
  }
}
