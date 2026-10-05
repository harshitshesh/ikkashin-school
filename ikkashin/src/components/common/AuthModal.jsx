import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import { useAuth } from '../../context/AuthContext';
import { Shield, GraduationCap, User, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AuthModal({ isOpen, onClose }) {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const loggedUser = await login(selectedRole, { email, password });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
        if (selectedRole === 'admin') {
          navigate('/admin-cms');
        } else {
          navigate('/student-portal');
        }
      }, 800);
    } catch (err) {
      setError('Login failed. Please check credentials.');
    }
  };

  const handleQuickDemoSelect = (role) => {
    setSelectedRole(role);
    if (role === 'student') setEmail('aarav.sharma@student.sbpsdoon.com');
    if (role === 'parent') setEmail('rajesh.sharma@example.com');
    if (role === 'admin') setEmail('admin@sbpsdoon.com');
    setPassword('demo1234');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Portal Access & Authentication">
      <div className="space-y-6">
        
        {/* Role selector tabs */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Select Your Role
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemoSelect('student')}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                selectedRole === 'student'
                  ? 'bg-blue-900 text-white border-blue-900 shadow-md font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-5 h-5 mx-auto mb-1 text-amber-400" />
              <span className="block text-xs">Student</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemoSelect('parent')}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                selectedRole === 'parent'
                  ? 'bg-blue-900 text-white border-blue-900 shadow-md font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <User className="w-5 h-5 mx-auto mb-1 text-emerald-400" />
              <span className="block text-xs">Parent</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemoSelect('admin')}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                selectedRole === 'admin'
                  ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-md font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Shield className="w-5 h-5 mx-auto mb-1 text-amber-400" />
              <span className="block text-xs">Admin CMS</span>
            </button>
          </div>
        </div>

        {/* Demo Credentials Tip */}
        <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs text-amber-900 flex items-center justify-between">
          <div>
            <span className="font-bold">Quick Demo Mode:</span> Click any role tab above to pre-fill test credentials.
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email / Roll Number
            </label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. aarav.sharma@student.sbpsdoon.com"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          {error && <p className="text-xs text-red-600 font-semibold">{error}</p>}

          <Button
            type="submit"
            variant="gold"
            className="w-full py-3"
            isLoading={isLoading}
            icon={success ? CheckCircle2 : ArrowRight}
            iconPosition="right"
          >
            {success ? "Authenticated!" : `Login as ${selectedRole.toUpperCase()}`}
          </Button>
        </form>

        <p className="text-center text-xs text-slate-400 pt-2">
          Forgot your password? Contact school IT desk at <span className="underline">support@sbpsdoon.com</span>
        </p>
      </div>
    </Modal>
  );
}
