/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCommonModule, MatRippleModule} from '@angular/material/core';
import {MatAnchor, MatButton} from './button';
import {MatAnchorBase, MatButtonBase} from './button-base';
import {MatFabAnchor, MatFabButton} from './fab';
import {MatIconAnchor, MatIconButton} from './icon-button';

@NgModule({
  imports: [MatCommonModule, CommonModule, MatRippleModule],
  exports: [
    MatAnchor,
    MatButton,
    MatIconAnchor,
    MatIconButton,
    MatFabAnchor,
    MatFabButton,
    MatCommonModule,
  ],
  declarations: [
    MatAnchor,
    MatButton,
    MatIconAnchor,
    MatIconButton,
    MatFabAnchor,
    MatFabButton,
    // TODO(devversion): remove when `MatButtonBase` becomes a selectorless Directive.
    MatButtonBase,
    // TODO(devversion): remove when `MatAnchorBase` becomes a selectorless Directive.
    MatAnchorBase,
  ],
})
export class MatButtonModule {
}
