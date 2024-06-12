# `react/no-object-type-as-default-prop` reproduction

See [App.jsx](src/App.jsx) for the test setup.

Run `npm run lint` to get the output.

Eslint output:

```
12:25  error  foo has a/an object literal as default prop. This could lead to potential infinite render loop in React. Use a variable reference instead of object literal  react/no-object-type-as-default-prop

✖ 1 problem (1 error, 0 warnings)
```
