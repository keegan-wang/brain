import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/analyze', label: 'Analyze', icon: '🧠' },
    { path: '/aggregate', label: 'Aggregate', icon: '📊' },
  ];

  return (
    <nav className="mt-4">
      <div className="flex space-x-1 bg-dark-900/50 rounded-lg p-1">
        {navItems.map(item => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-all ${
                isActive
                  ? 'bg-brand-600 text-white shadow-lg'
                  : 'text-dark-100 hover:text-white hover:bg-dark-800/50'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
