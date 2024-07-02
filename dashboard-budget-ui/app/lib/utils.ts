import { 
  RiHome3Line,
  RiNumbersLine,
  RiChargingPile2Line,
  RiGitRepositoryLine,
  RiSettings3Line
} from "react-icons/ri";


export const PERIOD_TIME = ["Week", "Month", "Year"]

export const MENU_OPTIONS = [
  { route: 'Home', href: '/', icon: RiHome3Line },
  { route: 'Earnings', href: '/earnings', icon: RiNumbersLine },
  { route: 'Spending', href: '/spending', icon: RiChargingPile2Line },
  { route: 'Reports', href: '/reports', icon: RiGitRepositoryLine },
  { route: 'Settings', href: '/settingspage', icon: RiSettings3Line  }
];

export function getIconByName(name: string){
  
  const NextIcon = MENU_OPTIONS.find(option => option.route === name)?.icon ?? RiHome3Line;

  return NextIcon;
}