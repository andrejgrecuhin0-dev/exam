import { BaseDecorator } from './BaseDecorator';

/**
 * ConcreteDecoratorA
 * Calls the wrapped object and alters its result in some way.
 */
export class ConcreteDecoratorA extends BaseDecorator {
  /**
   * Decorators may call the parent implementation of the operation,
   * instead of calling the wrapped object directly. This approach
   * simplifies extension of decorator classes.
   */
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}
