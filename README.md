# Trivial SuperIntelligence

A minimal stealth landing page for **trivial.si**, using the supplied Trivial
branding and the paper, navy and orange palette from the eHive Slidev deck.
The layout pairs a sparse field of signal marks with a flat navy `trivial`
wordmark, orange dots, and a centered **SuperIntelligence** descriptor.
Plain HTML and CSS, with a small script to keep the copyright year current;
no build step, external fonts, analytics or cookies.

## Preview locally

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://localhost:8000>.

## Publish on GitHub

Repository: [sparse-computation-ai/trivial-si.github.io][repository].

1. Commit and push the site files to `main`, including `index.html`,
   `styles.css`, `script.js`, `assets/`, `.nojekyll`, `404.html` and `CNAME`.
2. Open [repository Settings → Pages][pages].
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/ (root)**, then **Save**.
5. Verify `trivial.si` in the organization settings as described below.
6. Under **Custom domain**, enter **trivial.si** and save if it is not already
   shown. The included `CNAME` contains that domain.
7. Complete the DNS setup below.
8. When GitHub's DNS check and certificate provisioning finish, enable
   **Enforce HTTPS**. Provisioning can take up to 24 hours.
9. Check the **Actions** tab for a successful Pages deployment, then open
   <https://trivial.si/>. Updates can take up to 10 minutes to appear.

No custom Actions workflow or build command is required.

## Verify the domain and configure DNS

In the **sparse-computation-ai organization → Settings → Pages**, select
**Add a domain**, enter `trivial.si`, and add the TXT record GitHub supplies
at the domain's DNS provider. Return to GitHub and select **Verify**. Keep
that TXT record afterward. Domain verification is at the organization level;
the custom domain setting for this site is at the repository level.

At the DNS provider for `trivial.si`, configure:

| Type | Host/name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `sparse-computation-ai.github.io` |

Replace conflicting parking/web-host A, AAAA or CNAME records for the apex
and `www`; preserve mail records and the verification TXT record. An apex
with these four A records is sufficient for IPv4 hosting. If publishing
IPv6 records, use GitHub's documented Pages AAAA values as well.

The `www` CNAME points to the **organization**, without a repository path.
With both records configured, GitHub redirects `www.trivial.si` to `trivial.si`.

DNS check on 2026-09-28: both Google and Cloudflare public resolvers returned
SERVFAIL for `trivial.si`; the delegated authoritative servers refused queries.
If this persists, activate/fix the domain's DNS zone at its provider (or correct
the registrar's nameserver delegation) before GitHub's DNS check can pass.

## Why the repository name is different from the website address

This repository belongs to `sparse-computation-ai`, so naming it
`trivial-si.github.io` does not reserve `https://trivial-si.github.io`.
That GitHub address requires an account or organization named `trivial-si`
with its own matching repository.

The selected address for this site is **https://trivial.si/**. No repository
rename or transfer is needed.

Without a custom domain, the nominal project address would be
`https://sparse-computation-ai.github.io/trivial-si.github.io/`. The existing
organization site uses `sparsecomputation.ai`, so project sites inherit that
domain: `https://sparsecomputation.ai/trivial-si.github.io/`. Configuring this
repository's own `trivial.si` domain overrides that inheritance.

## Branding and stealth

- Source: `sljeme-v2/branding/slidev/ehive-rba-poc/exports/ehive-rba-poc.pdf`
  and its Slidev sources, in the sibling workspace repository.
- The main logo uses `assets/trivial-superintelligence-flat.png`, a generated
  variant derived from the supplied eHive logo. It preserves the original
  wordmark style in flat navy with orange dots and centers **SuperIntelligence**
  underneath, with capital **S** and **I**. The tagline remains live text.
- The supplied `trivial-superintelligence.png` is retained unchanged as a brand
  reference. Original asset:
  `sljeme-v2/branding/assets/trivial-superintelligence.png`.
- The page requests `noindex, nofollow, noarchive` while in stealth. This is
  a public landing page, not access control.

## Official GitHub references

- [Configure a publishing source][publishing]
- [Manage a custom domain][domain]
- [Verify an organization domain][verify]
- [Custom domain inheritance][inheritance]
- [Secure a Pages site with HTTPS][https]

[repository]: https://github.com/sparse-computation-ai/trivial-si.github.io
[pages]: https://github.com/sparse-computation-ai/trivial-si.github.io/settings/pages
[publishing]: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
[domain]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
[verify]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
[inheritance]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
[https]: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
