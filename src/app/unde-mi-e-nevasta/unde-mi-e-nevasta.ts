import {Component, ViewEncapsulation} from '@angular/core';
import {Widget} from '../core/widget/widget';
import {BootstrapWizard} from '../components/wizard/wizard';
import {BootstrapApplicationWizard} from '../forms-wizard/bootstrap-application-wizard/bootstrap-application-wizard';
import {DropzoneDemo} from '../components/dropzone/dropzone';
import {HolderJs} from '../components/holderjs/holderjs';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {Autosize} from 'angular2-autosize/angular2-autosize';
import {AlertComponent} from 'ng2-bootstrap/components/alert';
declare var jQuery: any;

@Component({
  selector: '[unde-mi-e-nevasta]',
  template: require('./unde-mi-e-nevasta.html'),
  encapsulation: ViewEncapsulation.None,
  directives: [Widget, HolderJs, BootstrapWizard, BootstrapApplicationWizard, NKDatetime,  DropzoneDemo, HolderJs, Autosize, AlertComponent],
  styles: [require('./unde-mi-e-nevasta.scss')]
})
export class UndeMiENevasta {
  Perechea : string;
  Inculpat:string;
  Asta: string;

  ngOnInit(): void {
    this.Perechea = "Nevasta";
    this.Inculpat = "Inculpata";
    this.Asta = "Asta"
    jQuery('.chzn-select').select2();
    jQuery('.js-slider').slider();
  }
}
