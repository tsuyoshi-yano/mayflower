import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import Placeholder from '.';
import PlaceholderReadme from './Placeholder.md';

storiesOf('base', module).addDecorator(withKnobs)
  .add('Placeholder', withInfo(`<div>${PlaceholderReadme}</div>`)(() => {
    const props = {
      text: text('placeholder.text', 'This is just a placeholder for templates')
    };
    return(<Placeholder {...props} />);
  }));
