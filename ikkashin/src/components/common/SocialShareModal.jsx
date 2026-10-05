import  { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import {  Copy, Check, MessageSquare } from 'lucide-react';


export default function SocialShareModal({ isOpen, onClose, shareData }) {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;
  const title = shareData?.title || "Social Baluni Public School, Dehradun";
  const summary = shareData?.summary || "Check out this achievement at Social Baluni Public School!";

  const handleCopy = () => {
    navigator.clipboard.writeText(`${title} - ${currentUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      color: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}: ${currentUrl}`)}`
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share Achievement / Content">
      <div className="space-y-6">
        {/* Preview card */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
            SBPS Official Share
          </span>
          <h4 className="font-bold text-slate-900 text-base mt-2">{title}</h4>
          <p className="text-slate-600 text-sm mt-1">{summary}</p>
        </div>

        {/* Share platform icons */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Share directly to social media
          </label>
          <div className="grid grid-cols-2 gap-3">
            {shareLinks.map((platform) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-transform active:scale-95 shadow-sm ${platform.color}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{platform.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Copy link input */}
        <div className="pt-2">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Direct Share Link
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full text-xs bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-slate-700 focus:outline-none"
            />
            <Button
              variant={copied ? "gold" : "primary"}
              size="sm"
              onClick={handleCopy}
              icon={copied ? Check : Copy}
            >
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
