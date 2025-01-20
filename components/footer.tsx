import { Button } from "./button";
import { Container } from "./container";
import { Gradient } from "./gradient";
import { Link } from "./link";
import Logo from "./logo";

function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <p className="mx-auto mt-6 max-w-lg text-xl font-semibold text-gray-900">
        Discover the power of DeFi on Bitcoin.
        <br />
        Launch the Arkadiko app now to mint USDA, stake, and explore seamless
        liquidity opportunities!
      </p>
      <div className="mt-6">
        <Button
          className="w-full sm:w-auto"
          href="https://app.arkadiko.finance"
        >
          Launch app
        </Button>
      </div>
    </div>
  );
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-[family-name:var(--font-geist-mono)] text-sm/6 font-medium text-gray-950/50">
      {children}
    </h3>
  );
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>;
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-[hover]:text-gray-950/75"
      />
    </li>
  );
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Protocol</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="https://docs.arkadiko.finance/">
            Documentation
          </SitemapLink>
          <SitemapLink href="arkadiko-whitepaper.pdf">Whitepaper</SitemapLink>
          <SitemapLink href="https://info.arkadiko.finance">
            Analytics
          </SitemapLink>
          <SitemapLink href="https://github.com/arkadiko-dao/arkadiko/blob/master/SECURITY.md">
            Bug Bounty
          </SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Company</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/brand">Brand</SitemapLink>
          <SitemapLink href="/press-review">Press Review</SitemapLink>
          <SitemapLink href="/roadmap">Roadmap</SitemapLink>
          <SitemapLink href="arkadiko-EULA.pdf">EULA</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  );
}

function SocialIconX(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  );
}

function SocialIconMedium(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      clipRule="evenodd"
      {...props}
    >
      <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"></path>
    </svg>
  );
}

function SocialIconGitHub(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function SocialIconDiscord(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.93 5.34a16.89 16.89 0 00-4.07-1.23c-.03 0-.05.01-.07.03-.17.3-.37.7-.5 1.01a15.72 15.72 0 00-4.57 0c-.14-.32-.34-.7-.52-1a.06.06 0 00-.06-.04 16.84 16.84 0 00-4.1 1.25A15.95 15.95 0 002.1 16.42a16.8 16.8 0 005 2.45c.02 0 .05 0 .06-.02.39-.51.73-1.05 1.02-1.61a.06.06 0 00-.03-.09c-.54-.2-1.06-.44-1.56-.72a.06.06 0 010-.1l.3-.24a.06.06 0 01.07 0 12.18 12.18 0 0010.05 0h.06l.32.24c.03.03.03.08-.01.1-.5.28-1.02.52-1.56.72a.06.06 0 00-.04.09c.3.56.65 1.1 1.03 1.6.01.03.04.04.07.03a16.75 16.75 0 005.02-2.49 15.85 15.85 0 00-2.98-11.04zM8.68 14.18c-.98 0-1.8-.88-1.8-1.95 0-1.08.8-1.95 1.8-1.95 1.01 0 1.82.88 1.8 1.95 0 1.07-.8 1.95-1.8 1.95zm6.65 0c-.99 0-1.8-.88-1.8-1.95 0-1.08.8-1.95 1.8-1.95s1.81.88 1.8 1.95c0 1.07-.8 1.95-1.8 1.95z" />
    </svg>
  );
}

function SocialIconTelegram(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      {...props}
    >
      <path d="M226.328419 494.722069c145.760154-63.505384 242.95642-105.37202 291.588797-125.599908 138.855319-57.754731 167.708265-67.787346 186.514211-68.118629 4.136194-.072862 13.384412.952211 19.375019 5.813175 5.058351 4.104503 6.450106 9.649103 7.116105 13.540622.666 3.891519 1.495328 12.756499.836075 19.683337-7.524619 79.06182-40.083522 270.924008-56.647644 359.474601-7.008902 37.469075-20.809646 50.032265-34.170364 51.261739-29.035934 2.671932-51.084503-19.188971-79.207225-37.623769-44.006507-28.846821-68.867384-46.804056-111.583319-74.953224-49.365654-32.531233-17.363955-50.410965 10.769388-79.63145 7.362629-7.64714 135.295618-124.012084 137.771765-134.568208.309683-1.32022.597085-6.241374-2.326487-8.839924-2.923572-2.59855-7.238511-1.709947-10.352292-1.003233-4.41369 1.001745-74.714655 47.468076-210.902895 139.398991-19.954695 13.702434-38.029038 20.378719-54.223029 20.028857-17.852576-.385695-52.19377-10.094118-77.722918-18.392638-31.312539-10.178472-56.199122-15.559904-54.032059-32.846099 1.12874-9.00372 13.527697-18.2118 37.196872-27.62424Z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://x.com/ArkadikoFinance"
        target="_blank"
        aria-label="Visit us on X"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconX className="size-5" />
      </Link>
      <Link
        href="https://arkadikofinance.medium.com/"
        target="_blank"
        aria-label="Visit us on Medium"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconMedium className="size-6" />
      </Link>
      <Link
        href="https://github.com/arkadiko-dao/arkadiko"
        target="_blank"
        aria-label="Visit us on GitHub"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconGitHub className="size-6" />
      </Link>
      <Link
        href="https://discord.gg/7UB6JjjCNV"
        target="_blank"
        aria-label="Visit us on Discord"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconDiscord className="size-6" />
      </Link>
      <Link
        href="https://t.me/arkadikofin"
        target="_blank"
        aria-label="Visit us on Discord"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconTelegram className="size-8" />
      </Link>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/20" />
        <Container>
          <CallToAction />
          <div className="pb-16 relative">
            <div>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-3 flex">
                  <div className="pt-6 lg:pb-6">
                    <Logo className="h-10" />

                    <p className="mt-4 max-w-sm text-gray-950/95">
                      Bringing DeFi to Bitcoin, Arkadiko unlocks new financial
                      freedom with an open-source, non-custodial protocol. Mint
                      stablecoins, earn interest, and borrow assets seamlessly
                      on Stacks.
                    </p>
                    <div className="mt-6 flex items-center gap-8">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:pt-6">
                  <Sitemap />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Gradient>
    </footer>
  );
}
