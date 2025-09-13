import { useRef } from 'react';

interface AddActivityCardProps {
  onAdd: (file: File) => void;
  disabled?: boolean;
}

export default function AddActivityCard({ onAdd, disabled }: AddActivityCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onAdd(file);
      // Reset input
      e.target.value = '';
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`card border-2 border-dashed border-dark-800 hover:border-brand-500/50 transition-all duration-200 cursor-pointer group ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
      />

      <div className="aspect-video w-full flex items-center justify-center mb-4 rounded-lg bg-dark-900/50 group-hover:bg-dark-850/50 transition-colors">
        <div className="text-center">
          <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-brand-500/30 transition-colors">
            <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="text-sm text-brand-500 font-medium mb-1">Add Activity</div>
          <div className="text-xs text-dark-100">Upload an image</div>
        </div>
      </div>

      <div className="space-y-2 opacity-50">
        <div className="h-4 bg-dark-900 rounded" />
        <div className="h-3 bg-dark-900 rounded w-2/3" />
        <div className="h-3 bg-dark-900 rounded w-1/2" />
      </div>
    </div>
  );
}
