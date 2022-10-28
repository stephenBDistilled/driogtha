import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UiBox } from './ui-box';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'libs/UiBox',
  component: UiBox,
} as ComponentMeta<typeof UiBox>;

export const Primary: ComponentStory<typeof UiBox> = () => <UiBox />;
