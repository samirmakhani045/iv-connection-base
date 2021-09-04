import * as colors from '@studio/theme/colors';

export const menuOptions = [
  {
    icon: 'Notification',
    title: 'Notifications',
    badge: '1',
  },
  {
    icon: 'Node',
    title: 'Flow',
    active: true,
    options: [
      {
        fill: colors.red,
        title: 'Only Me',
      },
      {
        fill: colors.dark,
        title: 'Only Me',
      },
    ],
  },
  {
    icon: 'Team',
    title: 'Groups',
    pill: 'Coming soon',
    disabled: true,
    permissions: ['admin'],
  },
  {
    icon: 'Table',
    title: 'Connections',
  },
  {
    icon: 'Settings',
    title: 'My Preferences',
  },
  {
    icon: 'Comment',
    title: 'Feedback',
  },
];
