import { defineComponent } from 'vue';
import { LucideIcon } from 'lucide-react';

interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  {
    to: '/home',
    label: 'Home',
    icon: 'HomeIcon',
  },
  {
    to: '/about',
    label: 'About',
    icon: 'InfoIcon',
  },
];


