import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../i18n/content.model';
import { Icon } from '../shared/icon';
import { SectionHeading } from './section-heading';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, SectionHeading],
  template: `
    @let s = content().services;
    <section id="services" class="py-20 sm:py-28" aria-labelledby="services-title">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <app-section-heading headingId="services-title" [eyebrow]="s.eyebrow" [title]="s.title" [intro]="s.intro" />

        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          @for (service of s.items; track service.title) {
            <article
              class="relative flex flex-col rounded-3xl border bg-surface p-7 shadow-card"
              [class]="service.featured ? 'border-accent lg:-mt-4 lg:mb-4' : 'border-border'"
            >
              @if (service.featured) {
                <span class="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">
                  {{ s.featuredBadge }}
                </span>
              }
              <span
                class="flex size-12 items-center justify-center rounded-2xl"
                [class]="service.featured ? 'bg-accent text-primary ring-4 ring-accent-light' : 'bg-background-alt text-secondary'"
              >
                <app-icon [name]="service.icon" [size]="24" />
              </span>
              <h3 class="mt-6 text-xl font-extrabold text-primary">{{ service.title }}</h3>
              <p class="mt-3 leading-relaxed text-text-muted">{{ service.pitch }}</p>
              <ul class="mt-6 space-y-3 border-t border-border pt-6">
                @for (benefit of service.benefits; track benefit) {
                  <li class="flex gap-3 text-sm font-medium text-text">
                    <span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent-dark">
                      <app-icon name="check" [size]="13" [strokeWidth]="3" />
                    </span>
                    {{ benefit }}
                  </li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Services {
  readonly content = input.required<SiteContent>();
}
