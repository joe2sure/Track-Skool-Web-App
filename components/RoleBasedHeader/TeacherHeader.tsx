import RoleBasedHeader from './RoleBasedHeader';

export default function TeacherHeader() {
  return (
    <RoleBasedHeader
      navLinks={[
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/classes', label: 'Classes' },
        { href: '/attendance', label: 'Attendance' },
        { href: '/resources', label: 'Resources' },
        { href: '/communication', label: 'Communication' },
      ]}
    />
  );
}
