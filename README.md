# Decorator Pattern — TypeScript

> Structural design pattern that lets you attach new behaviors to objects
> by placing them inside wrapper objects that contain those behaviors.

---

## Directory Structure

```
exam/
├── src/
│   └── structural/
│       └── decorator/
│           ├── Component.ts          # Interface
│           ├── ConcreteComponent.ts  # Default implementation
│           ├── BaseDecorator.ts      # Abstract decorator
│           ├── ConcreteDecoratorA.ts # Adds behavior A
│           ├── ConcreteDecoratorB.ts # Adds behavior B
│           └── index.ts              # Barrel export
├── examples/
│   └── index.ts                      # Usage demo
├── package.json
├── tsconfig.json
└── README.md
```

---

## UML

```
      «interface»
      Component
    ──────────────
    + operation()
         ▲
         │ implements
    ─────┴──────────────────────────────────┐
    │                                        │
ConcreteComponent               BaseDecorator
─────────────────           ─────────────────────────
+ operation()               - wrappee: Component
                            ──────────────────────────
                            + BaseDecorator(c)
                            + operation()
                                    ▲
                          ┌─────────┴──────────┐
                          │                    │
               ConcreteDecoratorA    ConcreteDecoratorB
               ──────────────────    ──────────────────
               + operation()         + operation()
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run the example
npm run dev
```

### Expected output

```
=== Client: simple component ===
RESULT: ConcreteComponent

=== Client: decorated with A ===
RESULT: ConcreteDecoratorA(ConcreteComponent)

=== Client: decorated with A + B ===
RESULT: ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))
```

---

## How It Works

| Class | Role |
|---|---|
| `Component` | Common interface for components and decorators |
| `ConcreteComponent` | Core object whose behavior can be altered |
| `BaseDecorator` | Maintains a reference to a wrapped component and delegates |
| `ConcreteDecoratorA/B` | Add extra behavior before/after delegation |

Decorators can be **chained** in any order and combination, creating a
flexible alternative to subclassing for extending functionality.
