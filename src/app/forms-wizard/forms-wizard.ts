import {Component, ViewEncapsulation} from '@angular/core';
import {Widget} from '../core/widget/widget';
import {BootstrapWizard} from '../components/wizard/wizard';
import {BootstrapApplicationWizard} from './bootstrap-application-wizard/bootstrap-application-wizard';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
declare var jQuery: any;

@Component({
  selector: '[forms-wizard]',
  template: require('./forms-wizard.html'),
  encapsulation: ViewEncapsulation.None,
  directives: [Widget, BootstrapWizard, BootstrapApplicationWizard, NKDatetime, ROUTER_DIRECTIVES],
  styles: [require('./forms-wizard.scss')]
})
export class FormsWizard {

  ngOnInit(): void {
    jQuery('.chzn-select').select2();
  };
}
