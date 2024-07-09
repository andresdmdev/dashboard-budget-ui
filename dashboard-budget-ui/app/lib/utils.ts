import { 
  RiHome3Line,
  RiNumbersLine,
  RiChargingPile2Line,
  RiGitRepositoryLine,
  RiSettings3Line
} from "react-icons/ri";

import { 
  AiOutlineFundProjectionScreen,
  AiOutlineShopping,
  AiOutlineFileDone,
  AiOutlineSwitcher 
} from "react-icons/ai";

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

export const FIELD_OPERATION = [
  { name: 'Shooping', icon: AiOutlineShopping },
  { name: 'Investment', icon: AiOutlineFundProjectionScreen },
  { name: 'Education', icon: AiOutlineFileDone },
  { name: 'Other', icon: AiOutlineSwitcher },
]

export function getFieldIconByName(name: string){
  
  const NextIcon = FIELD_OPERATION.find(option => option.name === name)?.icon ?? AiOutlineSwitcher;

  return NextIcon;
}