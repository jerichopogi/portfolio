'use client';

import { useState } from 'react';

import { site } from '@/content/site';

/**
 * One field, nothing else. There is no form backend, so submitting opens a
 * mail draft with the sentence already in the body. The address is visible
 * below, so the section still works with JavaScript off.
 */
export const ContactField = () => {
  const [brief, setBrief] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent('New project');
    const body = encodeURIComponent(brief);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <label htmlFor="brief" className="sr-only">
        What are you building?
      </label>
      <div className="relative max-w-[32.5rem]">
        <input
          id="brief"
          name="brief"
          type="text"
          value={brief}
          onChange={(event) => setBrief(event.target.value)}
          placeholder="A booking tool for three clinics"
          className="h-16 w-full bg-[var(--surface)] pl-5 pr-16 text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-inset"
          style={{ border: 0, fontSize: 'var(--step-body)' }}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center bg-[var(--accent)] text-[var(--accent-ink)] transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out-expo)] hover:scale-105"
        >
          <span className="sr-only">Send this to {site.fullName}</span>
          <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
            <path
              d="M2 8h11M9 4l4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <p className="small mt-4 text-muted">
        This opens a mail draft. I reply within one working day, with a plan or an honest referral.
      </p>
    </form>
  );
};
