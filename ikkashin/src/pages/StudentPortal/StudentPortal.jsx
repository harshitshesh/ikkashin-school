import React, { useState } from 'react';
import { MOCK_STUDENT_PORTAL } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  FileText,
  CreditCard,
  Calendar,
  Download,
  AlertCircle,
  UserCheck,
  BookOpen
} from 'lucide-react';

export default function StudentPortal() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [assignments, setAssignments] = useState(MOCK_STUDENT_PORTAL.assignments);

  const studentData = MOCK_STUDENT_PORTAL.student;
  const marksheet = MOCK_STUDENT_PORTAL.marksheet;
  const feeReceipts = MOCK_STUDENT_PORTAL.feeReceipts;

  const toggleAssignment = (id) => {
    setAssignments(
      assignments.map((a) =>
        a.id === id
          ? { ...a, status: a.status === 'Submitted' ? 'Pending' : 'Submitted' }
          : a
      )
    );
  };

  const handleDownloadReceipt = (recId) => {
    alert(`Downloading Official Fee Receipt PDF: ${recId}`);
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner Header */}
      <section className="bg-slate-950 text-white py-12 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <img
              src={studentData.avatar}
              alt={studentData.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400 shadow-lg"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-white">{studentData.name}</h1>
                <Badge variant="amber">{studentData.house}</Badge>
              </div>
              <p className="text-slate-300 text-xs mt-0.5">{studentData.class} | Roll No: {studentData.rollNo}</p>
              <p className="text-slate-400 text-[11px]">Admission ID: {studentData.id}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
            <div className="text-center px-3 border-r border-slate-800">
              <span className="block text-2xl font-black text-emerald-400">{studentData.attendancePercentage}%</span>
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Attendance</span>
            </div>
            <div className="text-center px-3">
              <span className="block text-2xl font-black text-amber-400">0</span>
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Fee Due</span>
            </div>
          </div>

        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex border-b border-slate-200 gap-4 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-blue-900 text-blue-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Academic Marksheet
          </button>

          <button
            onClick={() => setActiveTab('assignments')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'assignments'
                ? 'border-blue-900 text-blue-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Homework & DPP Assignments ({assignments.filter(a => a.status === 'Pending').length})
          </button>

          <button
            onClick={() => setActiveTab('fees')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'fees'
                ? 'border-blue-900 text-blue-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Fee Payment Receipts
          </button>
        </div>

        {/* Tab 1: Marksheet */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-lg text-slate-900">Term 1 Evaluation Report</h3>
              <Badge variant="emerald">Pass - Distinction</Badge>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px]">
                  <tr>
                    <th className="p-3.5 rounded-l-xl">Subject</th>
                    <th className="p-3.5">Max Marks</th>
                    <th className="p-3.5">Obtained</th>
                    <th className="p-3.5 rounded-r-xl">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-800">
                  {marksheet.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-3.5">{row.subject}</td>
                      <td className="p-3.5 text-slate-500">{row.max}</td>
                      <td className="p-3.5 text-emerald-700 font-bold">{row.obtained}</td>
                      <td className="p-3.5"><Badge variant="amber">{row.grade}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Assignments */}
        {activeTab === 'assignments' && (
          <div className="space-y-4">
            {assignments.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded">
                      {item.subject}
                    </span>
                    <span className="text-xs text-slate-400">Due: {item.dueDate}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                </div>

                <Button
                  variant={item.status === 'Submitted' ? 'ghost' : 'gold'}
                  size="sm"
                  onClick={() => toggleAssignment(item.id)}
                  icon={item.status === 'Submitted' ? CheckCircle2 : BookOpen}
                >
                  {item.status === 'Submitted' ? 'Submitted ✓' : 'Mark Done'}
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Fees */}
        {activeTab === 'fees' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h3 className="font-extrabold text-lg text-slate-900">Fee Payment History</h3>
            <div className="space-y-3">
              {feeReceipts.map((rec) => (
                <div
                  key={rec.id}
                  className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">{rec.description}</span>
                    <span className="text-xs text-slate-500">Paid on {rec.date} | Receipt: {rec.id}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-emerald-700 text-base">{rec.amount}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={Download}
                      onClick={() => handleDownloadReceipt(rec.id)}
                    >
                      Receipt PDF
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

    </div>
  );
}
