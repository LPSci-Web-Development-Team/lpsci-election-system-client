// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Block } from 'baseui/block';
import { Avatar } from 'baseui/avatar';
import { Button, SHAPE } from 'baseui/button';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faLock } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Components
import { H1 } from 'baseui/typography';
import { ElectionSignInHeading } from '../ElectionSignInHeading';

// ANCHOR Styles
import {
  FORM_CONTROL, SUBMIT_BUTTON, INPUT, LOGO, ELECTIONS, ELECTIONS_CONTAINER,
} from './styles';

export const ElectionSignIn = React.memo(() => (
  <>
    <Block overrides={LOGO}>
      <Avatar
        name="lpsci-ssg-election"
        size="100px"
        src="img/lpsci-logo.png"
      />
    </Block>
    <Block overrides={ELECTIONS_CONTAINER}>
      <H1 overrides={ELECTIONS}>LPSCI SSG ELECTIONS &apos;20-&apos;21</H1>
    </Block>
    <ElectionSignInHeading />
    <Block overrides={FORM_CONTROL}>
      <FormControl
        label="Learner's Reference Number"
      >
        <Input
          placeholder="226503351137"
          startEnhancer={<FontAwesomeIcon icon={faIdBadge} />}
          overrides={INPUT}
        />
      </FormControl>
    </Block>
    <Block overrides={FORM_CONTROL}>
      <FormControl
        label="Password"
      >
        <Input
          placeholder="*****"
          type="password"
          startEnhancer={<FontAwesomeIcon icon={faLock} />}
          overrides={INPUT}
        />
      </FormControl>
    </Block>
    <Button
      shape={SHAPE.pill}
      type="submit"
      overrides={SUBMIT_BUTTON}
    >
      Sign In
    </Button>
  </>
));
