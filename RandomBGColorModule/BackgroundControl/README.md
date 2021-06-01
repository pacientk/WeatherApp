# Background Color Control

Foobar is a React Native library for changing the background color of a child component.

## Getting started

### Install

```bash
yarn add react-native-background-control
```

### Import

```react-native
import BackgroundControl from "react-native-background-control"
```

### Wrap components
```react-native
<BackgroundControl color={'pink'}>
  {your child components}
</BackgroundControl>
```
If the `color` parameter is not passed, then by clicking on the button, the background color will change randomly.

## License
[MIT](https://choosealicense.com/licenses/mit/)
