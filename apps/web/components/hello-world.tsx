import React from 'react';
import { Button } from '@seery/ui';

const HelloWorld = () => (
  <>
    <h1>Hello There!</h1>
    <label htmlFor="name">
      <input id="name" name="name" type="text" />
    </label>
    <Button title="Press Me" onPress={() => console.log('PRESSEd')} />
  </>
);

export default HelloWorld;
