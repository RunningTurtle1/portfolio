import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EN } from '../../i18n/content.en';
import { FR } from '../../i18n/content.fr';
import { SiteContent } from '../../i18n/content.model';
import { DEFAULT_LANG, Lang, isLang } from '../../site.config';
import { Seo } from '../../shared/seo';
import { SiteHeader } from '../../sections/site-header';
import { Hero } from '../../sections/hero';
import { Services } from '../../sections/services';
import { CaseStudies } from '../../sections/case-studies';
import { Method } from '../../sections/method';
import { About } from '../../sections/about';
import { Contact } from '../../sections/contact';
import { SiteFooter } from '../../sections/site-footer';

const CONTENT: Record<Lang, SiteContent> = { fr: FR, en: EN };

@Component({
  selector: 'app-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, SiteHeader, Hero, Services, CaseStudies, Method, About, Contact, SiteFooter],
  template: `
    <a
      [routerLink]="['/', currentLang()]"
      fragment="contenu"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:font-semibold focus:text-primary focus:shadow-card"
      >{{ c().skipLink }}</a
    >
    <app-site-header [content]="c()" [lang]="currentLang()" />
    <main id="contenu" class="font-sans">
      <app-hero [content]="c()" />
      <app-services [content]="c()" />
      <app-case-studies [content]="c()" />
      <app-method [content]="c()" />
      <app-about [content]="c()" />
      <app-contact [content]="c()" />
    </main>
    <app-site-footer [content]="c()" />
  `,
})
export class HomePage {
  /** Paramètre de route :lang (lié automatiquement par le routeur). */
  readonly lang = input<string>();

  protected readonly currentLang = computed<Lang>(() => {
    const lang = this.lang();
    return isLang(lang) ? lang : DEFAULT_LANG;
  });
  protected readonly c = computed(() => CONTENT[this.currentLang()]);

  constructor() {
    const seo = inject(Seo);
    effect(() => seo.apply(this.currentLang(), this.c()));
  }
}
