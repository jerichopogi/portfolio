import { navigation } from '@/content/site';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => (
  <header className="site-header">
    <a href="/" className="wordmark" aria-label="Jericho home">jericho<span>®</span></a>
    <nav aria-label="Main navigation">
      {navigation.map(item => <a href={item.href} key={item.label}>{item.label}</a>)}
    </nav>
    <div className="header-actions"><ThemeToggle /><a href="/#contact" className="contact-link">Let’s talk <span aria-hidden="true">↗</span></a></div>
  </header>
);
