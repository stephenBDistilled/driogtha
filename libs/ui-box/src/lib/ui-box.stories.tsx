import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UiBox } from './ui-box';

import styled from 'styled-components';
import React from 'react';

const Title = styled.div`
  grid-column: span 2;
  height: 24px;
`;

const Price = styled.div`
  height: 24px;
`;

const Spacer = styled.div`
  height: 52px;
  grid-column: span 2;
`;

const Likes = styled.div`
  height: 24px;
  text-align: right;
`;

export default {
  title: 'libs/UiBox',
  component: UiBox,
} as ComponentMeta<typeof UiBox>;

export const Primary: ComponentStory<typeof UiBox> = () => (
  <UiBox>
    <Title>Box</Title>
    <Spacer />
    <Price>€1</Price>
    <Likes>Likes: 45</Likes>
  </UiBox>
);

const SUiBox = styled(UiBox)`
  grid-template-areas:
    'title title'
    'spacer spacer'
    'price likes';
  grid-template-rows: 1fr 52px 1fr;
`;

const Title2 = styled.div`
  grid-area: title;
`;

const Price2 = styled.div`
  grid-area: price;
`;

const Likes2 = styled.div`
  text-align: right;
  grid-area: likes;
`;

const Spacer2 = styled.div`
  text-align: right;
  grid-area: spacer;
`;

export const Secondary: ComponentStory<typeof UiBox> = () => (
  <SUiBox>
    <Title2>Box</Title2>
    <Price2>€1</Price2>
    <Spacer2 />
    <Likes2>Likes: 45</Likes2>
  </SUiBox>
);
