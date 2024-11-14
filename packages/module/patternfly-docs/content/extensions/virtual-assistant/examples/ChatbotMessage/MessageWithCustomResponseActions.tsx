import React from 'react';

import Message from '@patternfly/virtual-assistant/dist/dynamic/Message';
import patternflyAvatar from './patternfly_avatar.jpg';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import RedoIcon from '@patternfly/react-icons/dist/esm/icons/redo-icon';

export const CustomActionExample: React.FunctionComponent = () => (
  <Message
    name="Bot"
    role="bot"
    avatar={patternflyAvatar}
    content="Example with custom actions"
    actions={{
      // regenerate: {
      //   ariaLabel: 'Regenerate',
      //   // eslint-disable-next-line no-console
      //   onClick: () => console.log('Clicked regenerate'),
      //   tooltipContent: 'Regenerate',
      //   icon: <RedoIcon />
      // },
      // download: {
      //   ariaLabel: 'Download',
      //   // eslint-disable-next-line no-console
      //   onClick: () => console.log('Clicked download'),
      //   tooltipContent: 'Download',
      //   icon: <DownloadIcon />
      // },
      // info: {
      //   ariaLabel: 'Info',
      //   // eslint-disable-next-line no-console
      //   onClick: () => console.log('Clicked info'),
      //   tooltipContent: 'Info',
      //   icon: <InfoCircleIcon />
      // }
      resolved: { 
        onClick: () => console.log('Resolved'), 
        variant: "secondary", 
        text: 'Resolved',
        tooltipContent: 'Resolved'
      },
      helpful: { 
        onClick: () => console.log('Helpful'), 
        variant: "secondary", 
        text: 'Helpful',
        tooltipContent: 'Helpful'
      },
      notHelpful: { 
        onClick: () => console.log('Not Helpful'), 
        variant: "secondary", 
        text: 'Not Helpful',
        tooltipContent: 'Not Helpful'
      },
      notRelevant: { 
        onClick: () => console.log('Not Relevant'), 
        variant: "secondary", 
        text: 'Not Relevant',
        tooltipContent: 'Not Relevant'
      },            
    }}
    actionsClassName="pf-v6-l-flex pf-m-column-gap-sm"
  />
);
