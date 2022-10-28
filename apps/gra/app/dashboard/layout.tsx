import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <Link href="/dashboard/myprofile">My Profile</Link>
      </div>
      <div>
        <Link href="/dashboard/saves">Saves</Link>
      </div>
      <div>
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      {children}
    </section>
  );
}
