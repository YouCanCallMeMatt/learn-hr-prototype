import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: "HR Module",
  description: "Manage People and Organizations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='flex flex-col h-screen bg-gray-100 font-sans'>
        <header className="flex flex-col items-center justify-center bg-yellow-100 p-4">
          <h1 className="text-2xl font-bold">{metadata.title}</h1>
          <p>{metadata.description}</p>
          <nav className="mt-2">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-blue-500 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/users" className="text-blue-500 hover:underline">
                  Users
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
        <footer className="flex flex-col items-center justify-center bg-blue-100 p-4">
          <p>© 2025 HR</p>
        </footer>
      </body>
    </html>
  );
}
