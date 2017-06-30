import {
  NgModule,
  ModuleWithProviders,
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Directive
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'md-text',
  templateUrl: 'text.html',
  styleUrls: ['text.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdText {}

@NgModule({
  exports: [
    MdText
  ],
  declarations: [
    MdText
  ],
})
export class MdTextModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdTextModule,
      providers: []
    };
  }
}