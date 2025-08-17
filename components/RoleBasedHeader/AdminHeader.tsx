import RoleBasedHeader from './RoleBasedHeader';

export default function AdminHeader() {
  return (
    <RoleBasedHeader
      navLinks={[
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/manage-users', label: 'Users' },
        { href: '/reports', label: 'Reports' },
        { href: '/settings', label: 'Settings' },
        { href: '/communication', label: 'Communication' },
      ]}
    />
  );
}
