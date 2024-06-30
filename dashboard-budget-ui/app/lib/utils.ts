import {
  HomeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  PresentationChartBarIcon,
  WindowIcon
} from '@heroicons/react/24/outline';

export const PERIOD_TIME = ["Week", "Month", "Year"]

export const MENU_OPTIONS = [
  { route: 'Home', href: '/', icon: HomeIcon },
  { route: 'Earnings', href: '/earnings', icon: CurrencyDollarIcon },
  { route: 'Spending', href: '/spending', icon: ShoppingBagIcon},
  { route: 'Reports', href: '/reports', icon: PresentationChartBarIcon },
  { route: 'Settings', href: '/settings', icon: WindowIcon }
];

export function getIconByName(name: string){
  
  const NextIcon = MENU_OPTIONS.find(option => option.route === name)?.icon ?? HomeIcon;

  return NextIcon;
}