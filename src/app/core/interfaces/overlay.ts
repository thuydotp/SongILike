import { Type } from "@angular/core";

export class OverlayModel {
  constructor(public component: Type<any>, public data: any) {}
}
