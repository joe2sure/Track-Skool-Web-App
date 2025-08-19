'use client';

import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md'
}: ModalProps) {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        ></div>
        
        <div className={`relative bg-white dark:bg-gray-800 high-contrast:bg-black rounded-xl shadow-xl w-full ${sizeClasses[size]} max-h-screen overflow-y-auto`}>
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 high-contrast:border-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 high-contrast:text-white high-contrast:hover:text-gray-300 cursor-pointer"
              >
                <i className="ri-close-line text-lg w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>
          )}
          
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}