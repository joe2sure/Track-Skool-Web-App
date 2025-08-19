'use client';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  name?: string;
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  onKeyDown,
  className = '',
  disabled = false,
  required = false,
  id,
  name
}: InputProps): React.ReactElement {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={disabled}
      required={required}
      id={id}
      name={name}
      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm ${disabled ? 'bg-gray-50 cursor-not-allowed' : ''} ${className}`}
    />
  );
}
