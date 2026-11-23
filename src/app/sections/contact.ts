import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../i18n/content.model';
import { SITE } from '../site.config';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    @let ct = content().contact;
    <section id="contact" class="py-20 sm:py-28" aria-labelledby="contact-title">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="dot-panel relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div class="mx-auto flex size-16 items-center justify-center rounded-full bg-accent text-primary ring-8 ring-accent-light">
            <app-icon name="mail" [size]="28" />
          </div>
          <p class="mt-8 text-sm font-bold uppercase tracking-[0.14em] text-secondary-dark">{{ ct.eyebrow }}</p>
          <h2 id="contact-title" class="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
            {{ ct.title }}
          </h2>
          <p class="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-text-muted">{{ ct.text }}</p>

          <a
            [href]="mailto"
            class="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-surface shadow-card transition-colors hover:bg-primary-hover"
          >
            <app-icon name="mail" [size]="20" />
            {{ ct.cta }}
          </a>
          <p class="mt-5 text-text-muted">
            {{ ct.orWrite }}
            <a [href]="mailto" class="font-semibold text-secondary-dark underline-offset-4 hover:underline">{{ email }}</a>
          </p>
          @if (links.length) {
            <p class="mt-3 text-text-muted">
              {{ ct.otherChannels }}
              @for (link of links; track link.label; let last = $last) {
                <a [href]="link.url" target="_blank" rel="noopener" class="font-semibold text-secondary-dark underline-offset-4 hover:underline">{{ link.label }}</a>{{ last ? '' : ' · ' }}
              }
            </p>
          }

          <ul class="mt-10 flex flex-wrap justify-center gap-3">
            @for (item of ct.reassurance; track item) {
              <li class="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-soft">
                <app-icon name="check" [size]="16" [strokeWidth]="3" class="text-accent-dark" />
                {{ item }}
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class Contact {
  readonly content = input.required<SiteContent>();
  protected readonly email = SITE.email;
  protected readonly mailto = `mailto:${SITE.email}`;
  protected readonly links = [
    { label: 'LinkedIn', url: SITE.links.linkedin },
    { label: 'Malt', url: SITE.links.malt },
  ].filter((link) => !!link.url);
}
