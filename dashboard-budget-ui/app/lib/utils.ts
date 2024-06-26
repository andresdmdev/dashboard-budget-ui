import {
  HomeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export const MENU_OPTIONS = [
  { route: 'Home', href: '/home', icon: HomeIcon },
  { route: 'Earnings', href: '/earnings', icon: CurrencyDollarIcon },
  { route: 'Spending', href: '/spending', icon: ShoppingBagIcon},
  { route: 'Reports', href: '/reports', icon: "ChartBarIcon" },
  { route: 'Settings', href: '/settings', icon: "CogIcon" }
];