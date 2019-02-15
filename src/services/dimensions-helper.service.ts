import { Inject, Injectable } from '@angular/core';

/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
@Injectable()
export class DimensionsHelper {

  getDimensions(element: Element): ClientRect {
    if (typeof window !== 'undefined') {
      return element.getBoundingClientRect();
    } else {
      return {
        width: 1000,
        height: 800,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      };
    }
  }

}
