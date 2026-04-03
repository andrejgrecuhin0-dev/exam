import { Component } from './Component';

/**
 * BaseDecorator
 * Follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping
 * interface for all concrete decorators.
 */
export class BaseDecorator implements Component {
  protected wrappee: Component;

  constructor(component: Component) {
    this.wrappee = component;
  }

  /**
   * Delegates all work to the wrapped component.
   */
  public operation(): string {
    return this.wrappee.operation();
  }
}
