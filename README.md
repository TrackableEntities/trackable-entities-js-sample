# Sample Angular App for trackable-entities-js

Sample app for [trackable-entities-js](https://github.com/TrackableEntities/trackable-entities-js).

> Note: You must install *rxjs* version **5.4.3** or greater, in order to avoid a compilation error.
> - For more info see this [issue](https://github.com/Reactive-Extensions/RxJS/issues/1487).

> Note: You must change the TypeScript compiler target to "es2015" in **ts.config.json**, **tsconfig.app.json** and **tsconfig.spec.json**.
> - Apps using trackable-entities can support most modern browsers (Chrome, Firefox, Safari, Edge, etc), but they will not be able to support legacy browsers (Internet Explorer).

## Setup

Install **trackable-entities** as a runtime dependency from npm.

```
npm i --save trackable-entities
```

## Usage

To track property changes on an object, create a class that extends `TrackableEntity`. Then add a `constructor` that returns `super.proxify(this)`.  For example

```js
export class Product extends TrackableEntity {
  productId: number;
  productName: string;
  unitPrice: number;

  constructor() {
    super();
    return super.proxify(this);
  }
}
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

