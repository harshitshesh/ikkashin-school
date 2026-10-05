import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import Button from '../../components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-amber-900 shadow-inner">
        <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '10s' }} />
      </div>

      <div className="space-y-2 max-w-md">
        <span className="text-xs font-black text-amber-600 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
          Error 404 - Page Not Found
        </span>
        <h1 className="text-3xl font-black text-slate-900">Off-Track cadet!</h1>
        <p className="text-slate-600 text-sm">
          The requested page or circular location could not be located in the SBPS directory.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/">
          <Button variant="primary" icon={Home}>
            Return to Homepage
          </Button>
        </Link>
        <Link to="/admissions">
          <Button variant="gold">
            Admissions Portal
          </Button>
        </Link>
      </div>
    </div>
  );
}
