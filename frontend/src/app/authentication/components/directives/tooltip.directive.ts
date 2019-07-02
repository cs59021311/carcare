import { Directive, ElementRef, OnInit } from '@angular/core';

declare const $: any;
@Directive({
  selector: '[data-toggle="tooltip"]'
})
export class TooltipDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // console.log(this.elementRef.nativeElement); // ดูว่ามี tooltip กี่ตัว
    $(this.elementRef.nativeElement).tooltip();
  }

}
