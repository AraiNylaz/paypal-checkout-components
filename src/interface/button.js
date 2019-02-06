/* @flow */

import { isPayPalDomain } from '@paypal/sdk-client/src';
import { PopupOpenError as _PopupOpenError } from 'zoid/src';

import { setupLogger, allowIframe as _allowIframe } from '../lib';
import { getCheckoutComponent } from '../checkout';
import { getButtonsComponent } from '../buttons';

export const Buttons = getButtonsComponent();
export let Checkout;
export let PopupOpenError;
export let allowIframe;

if (isPayPalDomain()) {
    Checkout = getCheckoutComponent();
    PopupOpenError = _PopupOpenError;
    allowIframe = _allowIframe;
}

export function setupButtons() {
    setupLogger();
}