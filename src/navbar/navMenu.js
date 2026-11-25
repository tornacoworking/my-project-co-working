import { Armchair, Monitor, DoorOpen, FileText, Landmark, Mailbox, Building2, Rocket, User } from 'lucide-react';

// Single source for the desktop dropdowns and the mobile drawer.
// `to` points at real sections of the homepage (there are no per-plan pages yet).
export const menuSections = [
  {
    id: 'coworking',
    name: 'Coworking',
    cities: 'coworking', // shows the popular-cities chips linking to /coworking/{city}
    items: [
      { title: 'Hot Desk', description: 'Flexible seats by the day or month', icon: Armchair, to: '/#top-cities' },
      { title: 'Dedicated Desk', description: 'Your own desk, open 24/7', icon: Monitor, to: '/#top-cities' },
      { title: 'Private Office', description: 'Fully furnished cabins for teams', icon: DoorOpen, to: '/#top-cities' },
    ],
  },
  {
    id: 'virtual-office',
    name: 'Virtual Office',
    cities: 'virtual', // chips linking to /virtual-office/{city}
    items: [
      { title: 'GST Registration', description: 'A verified address for GST filing', icon: FileText, to: '/#virtual-office' },
      { title: 'Business Address', description: 'A prime address for your company', icon: Landmark, to: '/#virtual-office' },
      { title: 'Mailing Address', description: 'Mail handling and forwarding', icon: Mailbox, to: '/#virtual-office' },
    ],
  },
  {
    id: 'business-plans',
    name: 'Business Plans',
    cities: null,
    items: [
      { title: 'Enterprise', description: 'Custom workspaces for large teams', icon: Building2, to: '/#enquiry-form' },
      { title: 'Startup', description: 'Flexible plans that scale with you', icon: Rocket, to: '/#enquiry-form' },
      { title: 'Freelancer', description: 'Affordable seats for independent pros', icon: User, to: '/#enquiry-form' },
    ],
  },
];

// Quick city chips (names must exist in src/data/cityIndex.json).
export const drawerCities = ['Pune', 'Mumbai', 'Bangalore', 'Delhi', 'Hyderabad', 'Gurugram'];
export const dropdownCities = ['Pune', 'Mumbai', 'Bangalore', 'Delhi', 'Hyderabad', 'Gurugram', 'Noida', 'Chennai'];
