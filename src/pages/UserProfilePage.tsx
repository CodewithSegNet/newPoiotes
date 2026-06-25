import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UserProfilePage() {
  const [user, setUser] = useState<{ email: string; name: string; initials: string } | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('poietes_user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {}
    } else {
      // Mock user for layout preview if not logged in
      setUser({
        name: 'SpaceDr',
        email: 'SpaceDr@gmail.com',
        initials: 'S'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white pt-12 pb-24 font-cabinet">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-[22px] font-bold text-[#1a1a1a] mb-2">Profile & Visibility</h1>
          <p className="text-[#818181] text-[13px]">
            Your information belongs to you. Manage what you share, who sees it and what apps can access.{' '}
            <Link to="/privacy" className="text-[#FF6730] hover:underline">view our privacy policy</Link>
          </p>
        </div>

        {/* Profile Photo Card */}
        <div className="bg-[#FAFAFA] rounded-2xl p-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-semibold text-[#1a1a1a] text-[13px] mb-6">Profile photo</h3>
            <div className="relative inline-block">
              <div className="w-[100px] h-[100px] rounded-full bg-[#fdc60a] flex items-center justify-center text-4xl font-bold text-[#1a1a1a]">
                {user?.initials || 'S'}
              </div>
              <button className="absolute bottom-0 right-0 w-[34px] h-[34px] bg-[#1a1a1a] rounded-full border-[3px] border-[#FAFAFA] flex items-center justify-center text-white hover:bg-[#333] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:w-64 flex flex-col items-start md:items-end md:text-right">
            <label className="flex items-center gap-1.5 text-[11px] text-[#666] mb-2 font-medium">
              Who can see this ?
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </label>
            <div className="relative w-fit">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a1a1a]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <select className="appearance-none bg-transparent pl-5 pr-6 py-1 text-[13px] font-medium text-[#1a1a1a] cursor-pointer outline-none text-left">
                <option value="anyone">Anyone</option>
                <option value="private">Private</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a1a1a]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Info Card */}
        <div className="bg-[#FAFAFA] rounded-2xl p-8 mb-20">
          <h3 className="font-semibold text-[#1a1a1a] text-[13px] mb-8">Personal Info</h3>

          <div className="flex flex-col gap-8">
            <InfoRow label="Full Name" value={user?.name || "SpaceDr"} visibility="Anyone" editable={false} />
            <InfoRow label="Display Name" value={user?.name || "SpaceDr"} visibility="Anyone" editable={true} />
            <InfoRow label="Email Address" value={user?.email || "SpaceDr@gmail.com"} visibility="Only you and Admin" editable={false} />
            <InfoRow label="Pronouns" value="Mstr" visibility="Anyone" editable={false} />
            <InfoRow label="Job Title" value="Head HR" visibility="Anyone" editable={true} />
            <InfoRow label="Department" value="Human Resource" visibility="Anyone" editable={true} />
            <InfoRow label="Organization" value="Poietes" visibility="Anyone" editable={true} />
            <InfoRow label="Based In" value="Abuja (FCT)" visibility="Anyone" editable={true} />
          </div>
        </div>

      </div>
    </div>
  );
}

function InfoRow({ label, value, visibility, editable }: { label: string, value: string, visibility: string, editable: boolean }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[11px] font-semibold text-[#1a1a1a]">{label}</span>
          {editable && (
            <button className="text-[#818181] hover:text-[#1a1a1a] transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          )}
        </div>
        <p className="text-[13px] font-medium text-[#1a1a1a]">{value}</p>
      </div>

      <div className="md:w-64 flex flex-col items-start md:items-end md:text-right">
        {label === 'Full Name' ? (
          <label className="hidden md:flex items-center gap-1.5 text-[11px] text-[#666] mb-2 font-medium">
            Who can see this ?
          </label>
        ) : (
          <div className="hidden md:block h-[22px]" /> /* Spacer to align inputs properly if label is missing */
        )}
        <div className="relative w-fit">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a1a1a]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <select 
            className="appearance-none bg-transparent pl-5 pr-6 py-1 text-[13px] font-medium text-[#1a1a1a] cursor-pointer outline-none text-left"
            defaultValue={visibility}
          >
            <option value="Anyone">Anyone</option>
            <option value="Only you and Admin">Only you and Admin</option>
            <option value="Private">Private</option>
          </select>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a1a1a]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
