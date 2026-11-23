import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../i18n/content.model';
import { SITE } from '../site.config';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-border py-10 font-sans">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p class="font-extrabold text-primary">Camille Hayot<span class="text-accent">.</span></p>
          <p class="mt-1">{{ content().footer.tagline }}</p>
        </div>
        <div class="flex flex-col gap-1 sm:items-end">
          <ul class="flex gap-4">
            @for (link of links; track link.label) {
              <li>
                <a [href]="link.url" target="_blank" rel="noopener" class="font-semibold text-secondary-dark hover:underline">{{ link.label }}</a>
              </li>
            }
          </ul>
          <p>© {{ year }} Camille Hayot. {{ content().footer.rights }}</p>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  readonly content = input.required<SiteContent>();
  protected readonly year = new Date().getFullYear();
  protected readonly links = [
    { label: 'LinkedIn', url: SITE.links.linkedin },
    { label: 'Malt', url: SITE.links.malt },
    { label: 'GitHub', url: SITE.links.github },
  ].filter((link) => !!link.url);
}
