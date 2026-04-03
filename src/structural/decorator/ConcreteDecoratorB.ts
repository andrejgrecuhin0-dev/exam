import { BaseDecorator } from './BaseDecorator';

/**
 * ConcreteDecoratorB
 * Decorators can execute their behavior either before or after
 * the call to a wrapped object.
 */
export class ConcreteDecoratorB extends BaseDecorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}
