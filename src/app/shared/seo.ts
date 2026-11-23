import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SiteContent } from '../i18n/content.model';
import { LANGS, Lang, SITE } from '../site.config';

const OG_LOCALE: Record<Lang, string> = { fr: 'fr_FR', en: 'en_US' };

/** Balises de référencement : titre, description, Open Graph, langue, canonical et hreflang. */
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  apply(lang: Lang, content: SiteContent): void {
    const { title, description } = content.meta;
    this.document.documentElement.lang = lang;
    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE.name });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:locale', content: OG_LOCALE[lang] });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    if (!SITE.url) return;

    const pageUrl = `${SITE.url}/${lang}`;
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
    this.meta.updateTag({ property: 'og:image', content: `${SITE.url}/images/camille-hayot-og.jpg` });

    this.document.head.querySelectorAll('link[data-seo]').forEach((el) => el.remove());
    this.addLink({ rel: 'canonical', href: pageUrl });
    for (const alt of LANGS) {
      this.addLink({ rel: 'alternate', hreflang: alt, href: `${SITE.url}/${alt}` });
    }
    this.addLink({ rel: 'alternate', hreflang: 'x-default', href: `${SITE.url}/fr` });
  }

  private addLink(attrs: Record<string, string>): void {
    const link = this.document.createElement('link');
    for (const [key, value] of Object.entries(attrs)) link.setAttribute(key, value);
    link.setAttribute('data-seo', '');
    this.document.head.appendChild(link);
  }
}
