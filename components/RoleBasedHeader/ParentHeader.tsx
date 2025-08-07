import RoleBasedHeader from './RoleBasedHeader';

export default function ParentHeader() {
  return (
    <RoleBasedHeader
      navLinks={[
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/children', label: 'My Children' },
        { href: '/attendance', label: 'Attendance' },
        { href: '/reports', label: 'Progress Reports' },
        { href: '/communication', label: 'Messages' },
      ]}
    />
  );
}
