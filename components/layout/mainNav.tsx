import Link from "next/link";

import Logo from "@/components/layout/logo";

import styles from "@/components/layout/mainNav.module.css";

export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <Link href="/favorites">FAVORITES</Link>
      </nav>
    </header>
  );
}
