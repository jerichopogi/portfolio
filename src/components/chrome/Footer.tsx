import { site } from '@/content/site';
export const Footer = () => <footer className="site-footer"><a href="/" className="wordmark">jericho<span>®</span></a><p>Thoughtfully built. Always improving.</p><span>© {new Date().getFullYear()} {site.firstName}</span><a href="#main" className="back-top">Back to top ↑</a></footer>;
