import React from 'react';
import styled from 'styled-components';

import { LiveWidgetContent } from './LiveWidgetContent';
import { ScheduledWidgetContent } from './ScheduledWidgetContent';
import { SpaceDTO } from '@pushprotocol/restapi';

const LIVE_WIDGET_CONTENT_FIXED_HEIGHT = '485px';
const SCHEDULED_WIDGET_CONTENT_FIXED_HEIGHT = '350px';

interface WidgetContentProps {
  account?: string; //Temp Prop to Test Host functionality
  spaceData?: SpaceDTO;
  shareUrl?: string;
  isMinimized: boolean;

  // temp props only for testing demo purpose for now
  isHost?: boolean;
  isLive?: boolean;
  isJoined?: boolean;
  isTimeToStartSpace?: boolean;
  isMember?: boolean;
}
export const WidgetContent: React.FC<WidgetContentProps> = ({
  account,
  spaceData,
  shareUrl,
  isLive,
  isHost,
  isJoined,
  isTimeToStartSpace,
  isMember,
  isMinimized,
}: WidgetContentProps) => {
  return (
    <Container
      isMinimized={isMinimized}
      height={
        isLive
          ? LIVE_WIDGET_CONTENT_FIXED_HEIGHT
          : SCHEDULED_WIDGET_CONTENT_FIXED_HEIGHT
      }
    >
      {isLive ? (
        <LiveWidgetContent
          spaceData={spaceData}
          isHost={isHost}
          isJoined={isJoined}
        />
      ) : (
        <ScheduledWidgetContent
          spaceData={spaceData}
          shareUrl={shareUrl}
          isHost={isHost}
          isMember={isMember}
          isTimeToStartSpace={isTimeToStartSpace}
        />
      )}
    </Container>
  );
};

//styles
const Container = styled.div<{ height: string; isMinimized: boolean }>`
  display: flex;
  flex-direction: column;
  border-bottom: ${(props) => props.theme.border};

  height: ${(props) => (props.isMinimized ? '0' : props.height)};
  transition: height 200ms ease-out;
  overflow: hidden;

  align-items: center;
  justify-content: space-between;
`;