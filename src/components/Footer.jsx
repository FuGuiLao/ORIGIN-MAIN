import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative pt-5 pb-20 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-zinc-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Origin Investigations Inc. All Rights Reserved.</p>
        <p><a href="/src/pages/terms-of-use.pdf" target="_blank">Terms of Use</a> | <a href="pages/privacy-policy.pdf" target="_blank">Privacy Policy</a> | <a href="#data-security">Data Security</a>
        </p>
      </div>
    </footer>
  )
}
