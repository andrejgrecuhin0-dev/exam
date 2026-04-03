import {
  Component,
  ConcreteComponent,
  ConcreteDecoratorA,
  ConcreteDecoratorB,
} from '../src/structural/decorator';

/**
 * Client code works with all objects using the Component interface.
 * This way it can stay independent of the concrete classes of
 * components it works with.
 */
function clientCode(component: Component): void {
  console.log(`RESULT: ${component.operation()}`);
}

// ─────────────────────────────────────────────
// 1. Plain component — no decoration
// ─────────────────────────────────────────────
console.log("=== Client: simple component ===");
const simple = new ConcreteComponent();
clientCode(simple);
console.log();

// ─────────────────────────────────────────────
// 2. Wrapped with ConcreteDecoratorA
// ─────────────────────────────────────────────
console.log("=== Client: decorated with A ===");
const decoratedA = new ConcreteDecoratorA(simple);
clientCode(decoratedA);
console.log();

// ─────────────────────────────────────────────
// 3. Wrapped with both A and B (chained)
// ─────────────────────────────────────────────
console.log("=== Client: decorated with A + B ===");
const decoratedAB = new ConcreteDecoratorB(new ConcreteDecoratorA(simple));
clientCode(decoratedAB);
