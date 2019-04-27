/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, ElementRef, EventEmitter, Injector, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractComponent} from '../../../../common/component/abstract.component';
import {CommonUtil} from '../../../../common/util/common.util';

@Component({
  selector: '[overview-radio]',
  templateUrl: './radio.component.html',
  host: { '[class.ddp-wrap-edit3]': 'true' }
})
export class RadioComponent extends AbstractComponent implements OnInit, OnDestroy, OnChanges {

  public readonly UUID = CommonUtil.getUUID();
  public readonly RADIO_BUTTON_NAME_PREFIX = 'overview-radio-button';

  public readonly BTN_TYPE_ALL = 'ALL';
  public readonly BTN_TYPE_OK = 'OK';
  public readonly BTN_TYPE_ERROR = 'ERROR';

  @Input()
  public selectItem: 'ALL' | 'OK' | 'ERROR' = this.BTN_TYPE_ALL;

  private isSelectedType: 'ALL' | 'OK' | 'ERROR' = this.selectItem;

  @Output('changeValue')
  private changeEvent: EventEmitter<'ALL' | 'OK' | 'ERROR'> = new EventEmitter();

  constructor(protected elementRef: ElementRef,
              protected injector: Injector) {
    super(elementRef, injector);
  }

  public ngOnInit() {
    super.ngOnInit();
  }

  public ngOnDestroy() {
    super.ngOnDestroy();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes[ 'selectItem' ]) {
      this.isSelectedType = changes[ 'selectItem' ].currentValue;
    }
  }

  public selectType(btnType: 'ALL' | 'OK' | 'ERROR') {
    this.isSelectedType = btnType;
    this.changeEvent.emit(btnType);
  }
}