import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContent } from '../i18n/content.model';
import { SITE } from '../site.config';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    @let h = content().hero;
    <section class="dot-panel pb-16 pt-32 sm:pb-24 sm:pt-40" aria-labelledby="hero-title">
      <div class="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.14em] text-text-muted">{{ h.eyebrow }}</p>
          <h1 id="hero-title" class="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-5xl xl:text-6xl">
            {{ h.titleLine1 }}<br />
            <span class="text-secondary">{{ h.titleLine2 }}</span>
          </h1>
          <p class="mt-6 text-xl text-text-muted sm:text-2xl">
            {{ h.subtitle }} <strong class="font-bold text-primary">{{ h.subtitleStrong }}</strong>
          </p>

          <ul class="mt-8 flex flex-wrap gap-3">
            @for (pill of h.pills; track pill.label) {
              <li
                class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold sm:text-base"
                [class]="
                  pill.featured
                    ? 'border-accent bg-accent text-primary'
                    : 'border-border bg-surface text-primary'
                "
              >
                @if (pill.featured) {
                  <app-icon [name]="pill.icon" [size]="18" />
                }
                {{ pill.label }}
              </li>
            }
          </ul>

          <div class="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              [href]="mailto"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-surface shadow-soft transition-colors hover:bg-primary-hover"
            >
              <app-icon name="mail" [size]="18" />
              {{ h.ctaPrimary }}
            </a>
            <a
              routerLink="."
              fragment="etudes-de-cas"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 font-bold text-primary transition-colors hover:border-secondary hover:text-secondary"
            >
              {{ h.ctaSecondary }}
              <app-icon name="arrow-right" [size]="18" />
            </a>
          </div>
        </div>

        <!-- Schéma : tâches répétitives → automatisation → temps gagné -->
        <div class="flex flex-col gap-6">
          <ol class="flex items-start justify-between rounded-3xl bg-surface p-6 shadow-card sm:p-8">
            @for (step of h.flow; track step.label; let last = $last) {
              <li class="flex flex-1 flex-col items-center text-center">
                <span
                  class="flex items-center justify-center rounded-full"
                  [class]="
                    step.featured
                      ? 'size-16 bg-accent text-primary ring-8 ring-accent-light'
                      : 'size-14 border-2 border-border bg-surface text-secondary'
                  "
                >
                  <app-icon [name]="step.icon" [size]="step.featured ? 28 : 24" />
                </span>
                <span class="mt-4 text-sm font-semibold leading-snug" [class]="step.featured ? 'text-primary' : 'text-text-muted'">
                  {{ step.label }}
                </span>
              </li>
              @if (!last) {
                <li aria-hidden="true" class="mt-7 h-0 w-6 shrink-0 border-t-2 border-dashed border-secondary/40 sm:w-10"></li>
              }
            }
          </ol>

          <a
            [href]="mailto"
            class="group flex items-center gap-4 rounded-3xl bg-surface p-5 shadow-card transition-transform hover:-translate-y-0.5 sm:p-6"
          >
            <span class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-background-alt text-secondary">
              <app-icon name="mail" [size]="22" />
            </span>
            <span class="min-w-0">
              <span class="block font-bold text-primary">{{ h.contactCardTitle }}</span>
              <span class="block truncate font-semibold text-secondary group-hover:underline">{{ email }}</span>
            </span>
          </a>

          <dl class="grid grid-cols-3 gap-3">
            @for (stat of h.stats; track stat.label) {
              <div class="rounded-2xl bg-surface/80 p-4 text-center">
                <dt class="sr-only">{{ stat.label }}</dt>
                <dd>
                  <span class="block text-lg font-extrabold text-primary sm:text-xl">{{ stat.value }}</span>
                  <span class="mt-1 block text-xs leading-snug text-text-muted">{{ stat.label }}</span>
                </dd>
              </div>
            }
          </dl>
        </div>
      </div>
    </section>
  `,
})
export class Hero {
  readonly content = input.required<SiteContent>();
  protected readonly email = SITE.email;
  protected readonly mailto = `mailto:${SITE.email}`;
}
