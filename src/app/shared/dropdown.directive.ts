import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') onClick() {
    console.log('I was clicked');
    this.isOpen = !this.isOpen;
  }
  constructor() {}
}
