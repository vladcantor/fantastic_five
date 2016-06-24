import {Component, ViewEncapsulation} from '@angular/core';
import {Widget} from '../core/widget/widget';
import {BootstrapWizard} from '../components/wizard/wizard';
import {BootstrapApplicationWizard} from '../forms-wizard/bootstrap-application-wizard/bootstrap-application-wizard';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
declare var jQuery: any;

@Component({
  selector: '[unde-mi-e-nevasta]',
  template: require('./unde-mi-e-nevasta.html'),
  encapsulation: ViewEncapsulation.None,
  directives: [Widget, BootstrapWizard, BootstrapApplicationWizard, NKDatetime],
  styles: [require('./unde-mi-e-nevasta.scss')]
})
export class UndeMiENevasta {
  Perechea : string;

  ngOnInit(): void {
    this.Perechea = "Nevasta";
    jQuery('.chzn-select').select2();
  }
}
