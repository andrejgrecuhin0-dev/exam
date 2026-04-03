import { Component } from './Component';

/**
 * ConcreteComponent
 * Provides the default implementation of the operations.
 * There might be several variations of these classes.
 */
export class ConcreteComponent implements Component {
  public operation(): string {
    return 'ConcreteComponent';
  }
}
