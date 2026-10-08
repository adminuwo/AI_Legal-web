import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Ordered public navigation tabs matching the website header
const PUBLIC_NAV_TABS = [
  '/',
  '/features',
  '/blog',
  '/pricing',
  '/case-search',
  '/about'
];

/**
 * KeyboardNavigator
 * Enables intuitive keyboard arrow navigation across the website:
 * - ArrowRight: Switch to the next/right tab
 * - ArrowLeft: Switch to the previous/left tab
 * - ArrowUp: Smoothly scroll up
 * - ArrowDown: Smoothly scroll down
 * 
 * Safely ignores events when typing in inputs, textareas, contentEditable elements,
 * or when modifier keys (Ctrl, Alt, Meta, Shift) are held.
 */
export default function KeyboardNavigator() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // 1. Don't interfere if user is typing in an input, textarea, select, or editable area
      const target = e.target;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable ||
          target.getAttribute?.('contenteditable') === 'true' ||
          target.closest?.('[contenteditable="true"]') ||
          target.closest?.('input') ||
          target.closest?.('textarea'))
      ) {
        return;
      }

      // 2. Don't interfere if modifier keys (Ctrl, Cmd, Alt, Shift) are pressed
      if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
        return;
      }

      // 3. ArrowUp: Smooth scroll up
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        window.scrollBy({ top: -320, behavior: 'smooth' });
        return;
      }

      // 4. ArrowDown: Smooth scroll down
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        window.scrollBy({ top: 320, behavior: 'smooth' });
        return;
      }

      // 5. ArrowRight / ArrowLeft: Switch tabs
      const currentPath = location.pathname;
      const currentIndex = PUBLIC_NAV_TABS.indexOf(currentPath);

      // Only switch public tabs if currently on one of the public routes
      if (currentIndex !== -1) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % PUBLIC_NAV_TABS.length;
          navigate(PUBLIC_NAV_TABS[nextIndex]);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prevIndex = (currentIndex - 1 + PUBLIC_NAV_TABS.length) % PUBLIC_NAV_TABS.length;
          navigate(PUBLIC_NAV_TABS[prevIndex]);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [location.pathname, navigate]);

  return null;
}
